module.exports = {
  extends: './.stylelint-css.config.js',
  rules: {
    'declaration-colon-newline-after': null, // prevents errors with styled components and props
    'function-comma-newline-after': null, // prevents errors with styled components and destructuring props
    'function-name-case': null,
    'function-parentheses-newline-inside': null, // prevents errors with styled components and props
    indentation: null,
    'media-feature-name-no-unknown': null, // prevents errors with styled components and props
    'media-feature-range-operator-space-after': null, // prevents errors with styled components and props
    'media-feature-range-operator-space-before': null, // prevents errors with styled components and props
    'no-empty-source': null,
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
    'property-no-unknown': null,
    'value-keyword-case': null, // prevents js variables from being "renamed" to lowercase
    'value-list-comma-newline-after': null, // prevents errors with styled components and destructuring props
  },
};
