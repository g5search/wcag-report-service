require('dotenv').config()
const express = require('express')
const consola = require('consola')
const health = require('@cloudnative/health-connect')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const healthcheck = new health.HealthChecker()
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  await nuxt.ready()
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  require('./routes')(app)
  app.use(nuxt.render)
  app.use('/healthz/live', health.LivenessEndpoint(healthcheck))
  app.use('/healthz/ready', health.ReadinessEndpoint(healthcheck))
  app.use('/healthz/health', health.HealthEndpoint(healthcheck))
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
