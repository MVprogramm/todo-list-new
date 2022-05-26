module.exports = {
    extends: "eslint-config-airbnb-base",
    parserOptions: {
        "ecmaVersion": 10,
        "sourceType": "module"
    },
    env: {
      browser: true,
    },
    rules: {
      "no-console": 2,
      "import/prefer-default-export": 0
    }
};