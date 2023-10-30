module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    '@typescript-eslint/no-unused-expressions': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
  },
};
