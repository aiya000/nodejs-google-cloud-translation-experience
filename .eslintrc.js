module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'comma-dangle': 'off',
    'import/no-duplicates': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'space-before-function-paren': 'off',
    'import/no-named-default': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
