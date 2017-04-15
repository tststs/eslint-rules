module.exports = {

  extends: 'eslint:recommended',
  rules: {

    'indent': [1, 2, { 'SwitchCase': 1 }],
    'eol-last': [2],
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'curly': [2],
    'keyword-spacing': [2],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    "comma-dangle": [2, "only-multiline"],
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    'space-infix-ops': [2],
    'space-before-blocks': [2, { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'quotes': [ 2, 'single' ],
    'linebreak-style': [2, 'unix'],
    'semi': [2, 'always'],
    'no-console': [2, { allow: ['warn', 'error', 'assert'] }],
    'arrow-spacing': [2, { 'before': true, 'after': true }]
  }
};
