module.exports = {

  extends: 'eslint:recommended',
  rules: {

    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'curly': [2],
    'eol-last': [2],
    'indent': [1, 2, { 'SwitchCase': 1 }],
    'keyword-spacing': [2],
    'linebreak-style': [2, 'unix'],
    'newline-after-var': [2],
    'newline-before-return': [2],
    'no-console': [2, { allow: ['warn', 'error', 'assert'] }],
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'one-var-declaration-per-line': [2],
    'quotes': [ 2, 'single' ],
    'semi': [2, 'always'],
    'space-before-blocks': [2, { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'space-infix-ops': [2],
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    "comma-dangle": [2, "only-multiline"]
  }
};
