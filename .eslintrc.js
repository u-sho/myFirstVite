// eslint-disable-next-line
const { dependencies } = require('./package.json')

const OFF = 0
const WARN = 1
const ERROR = 2

const INDENT_SPACES = 2
const IsI18N = false

const isProduction = () => process.env.NODE_ENV === 'production'

// eslint-disable-next-line
module.exports = {
  ignorePatterns: [
    '.git',
    'node_modules',
    'dist',
    'dist-ssr',
    '*.local'
  ],

  env: {
    browser: true,
    node   : true
  },
  root         : true,
  parser       : 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion : 2021,
    parser      : '@typescript-eslint/parser',
    sourceType  : 'module',
    vueFeatures : {
      filter                : false,
      interpolationAsNonHTML: true
    }
  },
  extends: [
    'eslint:all',
    'plugin:vue/vue3-recommended',
    '@vue/typescript'
  ],
  rules: {
    // Switching rules
    'no-console': [ERROR,
      {
        allow: isProduction()
          ? ['warn', 'error']
          : ['warn', 'error', 'debug', 'table', 'log']
      }],
    'no-debugger'        : isProduction() ? ERROR : WARN,
    'no-warning-comments': isProduction() ? ERROR : OFF,

    // Custom rules
    // eslint-disable-next-line sort-keys
    'accessor-pairs'       : [ERROR, { enforceForClassMembers: false }],
    'array-bracket-newline': [ERROR, { multiline: true }],
    'array-callback-return': [ERROR, { checkForEach: true }],
    'array-element-newline': [ERROR, 'consistent'],
    'arrow-parens'         : [ERROR, 'as-needed'],
    'brace-style'          : [ERROR,
      '1tbs',
      { allowSingleLine: true }],
    'capitalized-comments'          : [ERROR, 'always'],
    'comma-dangle'                  : [ERROR, 'never'],
    'complexity'                    : [ERROR, { max: 2 }],
    'consistent-this'               : [ERROR, 'self'],
    'curly'                         : [ERROR, 'multi-or-nest', 'consistent'],
    'dot-location'                  : [ERROR, 'property'],
    'eol-last'                      : [ERROR, 'never'],
    'func-names'                    : [ERROR, 'as-needed'],
    'function-call-argument-newline': [ERROR, 'consistent'],
    'grouped-accessor-pairs'        : [ERROR, 'getBeforeSet'],
    'indent'                        : [ERROR, INDENT_SPACES],
    'key-spacing'                   : [ERROR, { align: 'colon' }],
    'keyword-spacing'               : [ERROR,
      {
        overrides: {
          'for'  : { after: false },
          'if'   : { after: false },
          'while': { after: false }
        }
      }],
    'lines-around-comment': [ERROR,
      {
        allowArrayEnd     : true,
        allowArrayStart   : true,
        allowBlockStart   : true,
        allowClassStart   : true,
        allowObjectEnd    : true,
        allowObjectStart  : true,
        beforeBlockComment: true,
        beforeLineComment : true
      }],
    'max-len': [ERROR,
      {
        tabWidth              : 2,
        ignoreUrls            : true,
        ignoreStrings         : true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals  : true
      }],
    'max-lines-per-function': [ERROR,
      {
        max           : 20,
        skipBlankLines: true,
        skipComments  : true
      }],
    'max-nested-callbacks'   : [ERROR, { max: 2 }],
    'max-statements-per-line': [ERROR, { max: 2 }],
    'multiline-ternary'      : [ERROR, 'always-multiline'],
    'new-cap'                : [ERROR, { capIsNew: false }],

    'no-else-return'         : [ERROR, { allowElseIf: false }],
    'no-implicit-coercion'   : [ERROR, { boolean: false }],
    'no-multiple-empty-lines': [ERROR,
      {
        max   : 1,
        maxBOF: 0,
        maxEOF: 0
      }],
    'no-restricted-exports': [ERROR, { restrictedNamedExports: ['default'] }],
    'no-restricted-globals': [ERROR,
      'document',
      'window',
      'module',
      'require'],
    'no-return-assign'           : [ERROR, 'always'],
    'no-unsafe-optional-chaining': [ERROR, { disallowArithmeticOperators: true }],
    'no-unused-expressions'      : [ERROR,
      {
        allowShortCircuit: true,
        allowTernary     : true
      }],
    'object-curly-newline': [ERROR, { multiline: true }],
    'object-curly-spacing': [ERROR,
      'always',
      { objectsInObjects: false }],
    'object-property-newline': [ERROR, { allowAllPropertiesOnSameLine: true }],
    'object-shorthand'       : [ERROR,
      'always',
      { avoidExplicitReturnArrows: true }],
    'one-var'                        : [ERROR, 'never'],
    'operator-linebreak'             : [ERROR, 'before'],
    'padded-blocks'                  : [ERROR, 'never'],
    'padding-line-between-statements': [ERROR,
      { blankLine: 'always', next: '*', prev: 'import' },
      { blankLine: 'any', next: 'import', prev: 'import' },
      { blankLine: 'never', next: '*', prev: 'singleline-let' },
      { blankLine: 'always', next: 'return', prev: '*' }],
    'quote-props': [ERROR, 'consistent'],
    'quotes'     : [ERROR, 'single'],
    'semi'       : [ERROR, 'never'],
    'sort-keys'  : [ERROR,
      'asc',
      {
        caseSensitive: true,
        natural      : true
      }],
    'space-before-function-paren': [ERROR,
      {
        anonymous : 'never',
        asyncArrow: 'always',
        named     : 'never'
      }],
    'space-unary-ops': [ERROR,
      {
        nonwords: false,
        words   : true
      }],
    'spaced-comment': [ERROR,
      'always',
      {
        block: {
          balanced  : true,
          exceptions: ['*']
        },
        line: {
          exceptions: ['-'],
          markers   : ['/']
        }
      }],

    // Off rules
    // eslint-disable-next-line sort-keys
    'default-case'           : OFF,
    'guard-for-in'           : OFF,
    'no-continue'            : OFF,
    'no-multi-spaces'        : OFF,
    'no-plusplus'            : OFF,
    'no-ternary'             : OFF,
    'no-underscore-dangle'   : OFF,
    'no-unused-vars'         : OFF,
    'no-useless-computed-key': OFF,
    'sort-imports'           : OFF,

    // Vue Uncategorized rules
    'vue/block-tag-newline': [ERROR,
      {
        singleline   : 'always',
        multiline    : 'always',
        maxEmptyLines: 1
      }],
    'vue/comment-directive': [ERROR,
      { reportUnusedDisableDirectives: true }],
    'vue/component-name-in-template-casing': [ERROR,
      'PascalCase',
      { registeredComponentsOnly: false }],
    'vue/custom-event-name-casing'    : ERROR,
    'vue/html-comment-content-newline': ERROR,
    'vue/html-comment-content-spacing': ERROR,
    'vue/html-comment-indent'         : ERROR,
    'vue/match-component-file-name'   : [ERROR,
      {
        extensions     : ['vue'],
        shouldMatchCase: true
      }],
    'vue/max-len': [ERROR,
      {
        ignoreUrls               : true,
        ignoreStrings            : true,
        ignoreTemplateLiterals   : true,
        ignoreRegExpLiterals     : true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents   : true
      }],
    'vue/new-line-between-multi-line-property': ERROR,
    'vue/next-tick-style'                     : OFF,
    'vue/no-bare-strings-in-template'         : IsI18N ? ERROR : OFF,
    'vue/no-boolean-default'                  : [ERROR, 'default-false'],
    'vue/no-duplicate-attr-inheritance'       : ERROR,
    'vue/no-empty-component-block'            : ERROR,
    'vue/no-multiple-objects-in-class'        : ERROR,
    'vue/no-potential-component-option-typo'  : [ERROR,
      {
        presets  : ['vue', 'vue-router'],
        threshold: 2
      }],
    'vue/no-reserved-component-names': [ERROR,
      { disallowVue3BuiltInComponents: true }],
    'vue/no-restricted-block'            : OFF,
    'vue/no-restricted-call-after-await' : OFF,
    'vue/no-restricted-component-options': [ERROR,
      {
        name   : 'init',
        message: 'Use "beforeCreate" instead.'
      },
      {
        name   : '/^(?:at|de)tached/',
        message: '"attached" and "detached" is deprecated.'
      }],
    'vue/no-restricted-custom-event': [ERROR,
      {
        event  : 'input',
        message: 'If you intend a prop for v-model, it should be \'update:modelValue\' in Vue 3.',
        suggest: 'update:modelValue'
      }],
    'vue/no-restricted-props': [ERROR,
      {
        name   : 'value',
        message: 'If you intend a prop for v-model, it should be \'modelValue\' in Vue 3.',
        suggest: 'modelValue'
      }],
    'vue/no-restricted-static-attribute': [ERROR,
      {
        key    : '/align|alink|background|bgcolor|border|clear|color|compact|height|hspace|language|link|noshade|nowrap|size|sizes|start|text|vlink|vspace|width/',
        message: 'This attribute is deprecated.'
      },
      {
        element: 'li',
        key    : '/type|value/',
        message: 'This attribute is deprecated. See https://www.w3docs.com/learn-html/deprecated-html-attributes.html'
      },
      {
        element: 'html',
        key    : 'manifest',
        message: 'This attribute is obsolete. Use <link rel="manifest"> instead.'
      }],
    'vue/no-restricted-v-bind'      : ERROR,
    'vue/no-static-inline-styles'   : ERROR,
    'vue/no-template-target-blank'  : ERROR,
    'vue/no-unregistered-components': ERROR,
    'vue/no-unsupported-features'   : [ERROR,
      {
        version: dependencies.vue,
        ignores: [
          'v-model-argument',
          'v-model-custom-modifiers',
          'v-is'
        ]
      }],
    'vue/no-unused-properties': [ERROR,
      {
        groups  : ['props', 'data', 'computed', 'methods', 'setup'],
        deepData: true
      }],
    'vue/no-useless-mustaches'       : ERROR,
    'vue/no-useless-v-bind'          : ERROR,
    'vue/padding-line-between-blocks': ERROR,
    'vue/require-direct-export'      : OFF,
    'vue/require-name-property'      : ERROR,
    'vue/script-indent'              : ERROR,
    'vue/static-class-names-order'   : OFF,
    'vue/v-for-delimiter-style'      : ERROR,
    'vue/v-on-event-hyphenation'     : [ERROR,
      'always',
      { autofix: true }],
    'vue/v-on-function-call': [ERROR,
      'never',
      { ignoreIncludesComment: true }],
    'vue/valid-next-tick': OFF
  },
  overrides: [
    {
      files: ['.eslintrc.*'],
      rules: {
        'array-bracket-newline': [ERROR, 'consistent'],
        'max-lines'            : OFF,
        'sort-keys'            : [ERROR, 'asc', { minKeys: 10 }]
      }
    },
    {
      files: ['*.vue'],
      rules: {
        'indent'       : OFF,
        'max-len'      : OFF,
        'sort-keys'    : OFF,
        'vue/sort-keys': ERROR
      }
    }
  ]
}