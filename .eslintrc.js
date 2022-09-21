const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'react/prop-types': RULES.OFF,
    camelcase: RULES.OFF,
    // "no-restricted-globals": RULES.OFF,
    // "no-param-reassign": RULES.OFF,
  },
  // settings: {
  //   'import/resolver': {
  //     foo: { someConfig: value },
  //   },
  // },
};
