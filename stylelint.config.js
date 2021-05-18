
module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    // Do not use a browser prefix that is already supported by autoprefixer
    'at-rule-no-unknown': null,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null
  },
  ignoreFiles: [
    'dist/**/*'
  ]
}
