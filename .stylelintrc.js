module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-hex-length': 'long',
    'string-quotes': 'single',
    'selector-max-class': 3,
    'at-rule-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'if',
          'else',
          'function',
          'mixin',
          'return',
          'each',
          'import',
          'rule',
          'include',
          'error',
          'for',
          'extend'
        ]
      }
    ],
    'block-no-empty': null,
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'function-name-case': null,
    'no-eol-whitespace': null,
    'unit-no-unknown': null
  }
};
