// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-console': 0,
    'global-require': 0,
    'import/newline-after-import': 0,
    'spaced-comment': 0,
    'semi': 0,
    'comma-dangle': 0,
    'key-spacing': 0,
    'arrow-spacing': 0,
    'no-undef': process.env.NODE_ENV === 'production' ? 1 : 0,
    'object-curly-spacing': 0,
    "no-underscore-dangle": 0,
    'max-len': 0,
    'no-useless-escape': process.env.NODE_ENV === 'production' ? 1 : 0,
    //vuex的mutation里会有
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-shadow': process.env.NODE_ENV === 'production' ? 1 : 0,
    'yoda': 0,
    'no-multiple-empty-lines':0,
    'quote-props':0,
    'quotes':0,
    'no-nested-ternary': 0,
    'no-eval':0,
    'linebreak-style': 0,
    'no-await-in-loop': 0,
    'no-else-return': 0,
    'no-invalid-regexp': 0,
    'import/no-unresolved': 0,
    'arrow-parens': 0,
    'no-multi-spaces': 0,
    'object-curly-newline': 0,
    'indent': 0,
    'prefer-destructuring': 0,
    'prefer-object-spread': 0,
    'no-trailing-spaces': 0,
    'no-restricted-globals': 0,
    'operator-linebreak': 0,
    'no-tabs': 0,
    'import/no-useless-path-segments': 0,
    'eol-last': 0,
    'prefer-promise-reject-errors': 0,
    'no-self-assign': 0,
    'no-async-promise-executor': 0,
    'function-paren-newline': 0,
    'dot-notation': 0,
    // 忽略函数空格
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'ignore',
      'asyncArrow': 'ignore'
    }],
    // 不需要key
    'vue/require-v-for-key': 0
  }
}
