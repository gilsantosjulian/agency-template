module.exports = {
  env: {// An environment defines global variables that are predefined
    es6: true,
    browser: true,
  },
  extends: ['airbnb'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 11,// Enableble features of ECMAScript 1 to 11
    sourceType: 'module',// If your code is in ECMAScript modules
    ecmaFeatures: {
      jsx: true,// Enable jsx
      experimentalObjectRestSpread: true,// Enable spread operator
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx'],
      },
    ],// Allow .jsx extension
    'react/prefer-stateless-function': 2,// Disable class components
    'no-console': 2,// Disable console log
    'no-alert': 2,// Disable alert
    'space-before-function-paren': ['error', 'always'],// Enable to add space before function parentheses
    'max-len': [
      'error',
      90,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],// Stablish max lenght per line (same in prettier config file)
    'padded-blocks': ['error', 'always'],// Enable to add blank lines at start and the end of a class, block and switch
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],// Enable trailing comas (same in prettier config file)
    'no-trailing-spaces': ['error'],// Disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines
    'no-plusplus': 'off',// Allow plusplus e.g. let a = 1; a++;
    'function-paren-newline': ['error', { minItems: 1 }],// Enable to add new line in functions that has one argument or more
    'import/prefer-default-export': 'error',// Export default is mandatory
    'react/prop-types': [2],// Enable verification of prop types
    'array-bracket-spacing': ['error', 'always'],// Enable to put spaces at the begining and the end of array
    'no-param-reassign': ['error', { 'props': true }],// Disable reasignation of function parameters, even its props
    'semi': ['error', 'never'],// Disable checking of semicolon at the end of a class or interface because Prettier removes them
    'import/extensions': ['error', 'never'],// Disable specify file extension when you import some module
    'react/jsx-props-no-spreading': 0,// Allow spread operator
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],// Enable single quote instead of double (same in prettier config file)
    'jsx-quotes': ['error', 'prefer-single'],// Enforces the use of single quotes for all JSX attribute values that don’t contain a single quote (same in prettier config file)
    'max-params': ['error', 2],// Avoid more than two parameter on functions
    'arrow-body-style': ['error', 'always'],// Add brackets to body of arrow functions
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],// Closing bracket will be aligned to the tag
    'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],// Maximun props per line on jsx tags
    'react/jsx-one-expression-per-line': [1, { 'allow': 'none' }],// Insert line breaks between any expression that are on the same line
    'react/jsx-first-prop-new-line': [1, 'always'],// First prop of a jsx tag will be located in a new line
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 1 }],// When you chained methods, the new call will be located in a new line
    'indent': ['error', 2, { 'MemberExpression': 0 }],// Disable indentation for chaining methods (same indentation in prettier config file)
    'react/forbid-prop-types': [1, { forbid: []}],// Disable prohibition of using array
  },
};
