module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@emotion', 'import', 'jsx-a11y', 'meteor', 'react', 'react-hooks', 'simple-import-sort', 'unused-imports'],
  settings: {
    'import/resolver': {
      meteor: {},
    },
  },
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
    meteor: true,
    node: true,
  },
  globals: {
    cy: true,
  },
};
