"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "eslint-config-hapi"
  ],
  env: {
    es6: true,
    "node": true
  },
  rules: {
    "no-undef": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    complexity: ["error", 10],
    "default-case": "error",
    "guard-for-in": "error",
    "no-empty-function": "error",
    "no-extend-native": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-return-await": "error",
    "no-throw-literal": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    radix: "error",
    "prefer-promise-reject-errors": "error",
    yoda: "error",
    "init-declarations": "error",
    "callback-return": "error",
    "comma-style": ["error", "last"],
    "id-length": ["error", { min: 3, exceptions: ["id"] }],
    indent: ["error", 2]
  }
};
