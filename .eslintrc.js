const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'linebreak-style': RULES.OFF,
    'object-curly-newline': RULES.OFF,
    'comma-dangle': RULES.OFF,
  },
};
