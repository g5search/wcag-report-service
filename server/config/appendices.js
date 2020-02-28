module.exports = [
  {
    headingPrimary: 'Appendix A.',
    headingShortName: 'appendixa',
    name: 'CODE BEST PRACTICES FOR SCREEN READERS',
    catCount: 30,
    categoryDesc: 'Code must follow proper conventions in order to be read correctly by screen readers. Any deviation from convention, typo, or improperly categorized element will result in difficulties for people who use screen readers to access websites.',
    cards: {
      'int-feat': {
        heading: 'INTERACTIVE FEATURES',
        subHeading: '12 REVIEW ELEMENTS',
        description: 'These are website features such as forms, buttons, and links. These features require certain structural best practices in order to be effectively utilized by screen readers.',
        checkIds: ['autocomplete-valid', 'button-name', 'checkboxgroup', 'input-image-alt', 'focus-order-semantics', 'label', 'label-title-only', 'label-title-only', 'form-field-multiple-labels', 'href-no-hash', 'link-name', 'radiogroup', 'image-redundant-alt', 'area-alt', 'server-side-image-map']
      },
      'text-lang': {
        heading: 'TEXT & LANGUAGE',
        subHeading: '8 REVIEW ELEMENTS',
        description: 'Visible text must meet standards in order to be found and read by screen readers. Language must be defined in order for screen readers to select the language-specific voice file to use to read.',
        checkIds: ['p-as-heading', 'heading-order', 'empty-heading', 'page-has-heading-one', 'html-has-lang', 'html-lang-valid', 'html-xml-lang-mismatch', 'valid-lang']

      },
      'list-tables': {
        heading: 'LISTS & TABLES',
        subHeading: '11 REVIEW ELEMENTS',
        description: 'Lists and tables must follow certain structural best practices in order to be read correctly by screen readers',
        checkIds: ['listitem', 'list', 'skip-link', 'th-has-data-cells', 'td-headers-attr', 'td-has-header', 'table-fake-caption', 'layout-table', 'scope-attr-valid', 'table-duplicate-name', 'tabindex']
      },
      ovi: {
        heading: 'OTHER VISUAL ITEMS',
        subHeading: '7 REVIEW ELEMENTS',
        description: 'Other visual items, such as images, iframes, etc. must follow certain best practices in order to be read correctly by screen readers.',
        checkIds: ['audio-caption', 'video-caption', 'video-description', 'definition-list', 'dlitem', 'frame-title-unique', 'frame-title', 'image-alt', 'object-alt', 'css-orientation-lock']
      },
      nvi: {
        heading: 'NON-VISUAL ITEMS',
        subHeading: '12 REVIEW ELEMENTS',
        description: 'There are structural items that allow users of screen readers to understand the structure of the webpage and easily scan content. These elements must follow best practices in order to be effective.',
        checkIds: ['landmark-complementary-is-top-level', 'landmark-contentinfo-is-top-level', 'hidden-content', 'region', 'duplicate-id-active', 'duplicate-id', 'landmark-main-is-top-level', 'bypass', 'landmark-one-main', 'landmark-no-duplicate-banner', 'landmark-no-duplicate-contentinfo', 'document-title']
      }
    }
  },
  {
    headingPrimary: 'Appendix B.',
    headingShortName: 'appendixb',
    name: 'READABILITY',
    catCount: 2,
    categoryDesc: 'Certain standards in text color, size, animation, and functionality must be followed in order to ensure that text can be read by users with vision and cognitive disabilities.',
    checkIds: ['link-in-text-block', 'color-contrast', 'meta-viewport-large', 'meta-viewport'],
    cards: null
  },
  {
    headingPrimary: 'Appendix C.',
    headingShortName: 'appendixc',
    name: 'RULES FOR IMPLEMENTING ARIA',
    catCount: 10,
    categoryDesc: 'ARIA (Accessible Rich Internet Application) is a convention that supplements interactive widgets that might not have accessibility elements coded directly so that the interactive elements can be passed to assistive technologies.',
    checkIds: ['aria-dpub-role-fallback', 'aria-valid-attr', 'aria-valid-attr-value', 'aria-allowed-role', 'aria-roles', 'aria-hidden-focus', 'aria-hidden-body', 'landmark-banner-is-top-level', 'aria-required-parent', 'aria-required-children', 'aria-allowed-attr', 'duplicate-id-aria'],
    cards: null
  },
  {
    headingPrimary: 'Appendix D.',
    headingShortName: 'appendixd',
    name: 'MISCELLANEOUS',
    catCount: 4,
    categoryDesc: 'This category includes 3 miscellaneous audits categories, including rules for access keys, speech input and timed content.',
    cards: {
      'dep-ani': {
        heading: 'Depreciated Animations',
        subHeading: '2 REVIEW ELEMENTS',
        description: 'These are animations that make elements of the page difficult to read, comprehend, or interact with for users who may have cognitive or motor disabilities. Typically, depreciated animations have been replaced in modern code by CSS (cascading style sheets).',
        checkIds: ['blink', 'marquee']
      },
      speech: {
        heading: 'SPEECH-INPUT',
        subHeading: '1 REVIEW ELEMENT',
        description: 'Certain standards must be used in website code in order to make it possible for users who use speech input to navigate a website.',
        checkIds: ['label-content-name-mismatch']
      },
      timed: {
        heading: 'TIMED CONTENT',
        subHeading: '1 REVIEW ELEMENT',
        description: 'Since users do not expect a page to refresh automatically, such refreshing can be disorienting. Refreshing also moves the programmatic focus back to the top of the page, away from where the user had it. Such resetting is frustrating for users.',
        checkIds: ['meta-refresh']
      }
    }
  }
]
