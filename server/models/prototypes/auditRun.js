const WcagReport = require('../../controllers/report')

module.exports = (models) => {
  models.wcag_run.getByTaskName = (project_id, salesforceId, name) => {
    let where = { project_id, name }
    if (salesforceId) {
      where = { name, salesforceId }
    }
    return generateReport(where, models)
  }
}

async function generateReport (where, models) {
  const audits = await models.wcag_run.findAll({
    where,
    include: [{
      model: models.wcag_violation,
      include: [
        { model: models.wcag_page },
        { model: models.wcag_impact }
      ]
    },
    {
      model: models.g5_updatable_location,
      attributes: ['name', 'display_name', 'client_urn']
    }
    ],
    order: [
      ['run_group', 'DESC']
    ]
  })
  let clientName = ''
  if (audits[0].g5_updatable_location) {
    clientName = await models.g5_updatable_client.findOne({
      where: {
        urn: audits[0].dataValues.g5_updatable_location.client_urn
      }
    }).then((client) => {
      const { name } = client.dataValues
      const { branded_name } = client.dataValues.properties
      return branded_name || name
    })
  }
  const report = new WcagReport({ audits, clientName })
  return report.generate()
}
