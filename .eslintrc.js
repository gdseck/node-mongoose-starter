const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/recommended',
  extends: [
    '@plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier-recommended',
    'plugin:lodash-fp/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': isProduction ? 'off' : 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': isProduction ? 'off' : 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'lodash-fp/use-fp': 'off',
    'lodash-fp/no-unused-result': 'off',
    'lodash-fp/consistent-name': 'off',
    'lodash-fp/no-extraneous-args': 'off',
    'lodash-fp/prefer-constant': 'off',
  },
};
