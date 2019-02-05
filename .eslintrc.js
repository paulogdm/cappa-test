module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-no-bind": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-use-before-define": ["error", { "variables": false }],
    "no-mixed-operators": 0,
  },
  "globals": {
    "google": true,
    "Plaid": true,
    "Stripe": true,
    "document": true,
    "localStorage": true,
    "window": true,
    "fetch": true,
    "Blob": true
  }
};
