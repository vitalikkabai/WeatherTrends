module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    document: true,
    fetch: false,
    localStorage: true,
    sessionStorage: true,
    window: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "linebreak-style": [0, "error", "windows"],
    "arrow-parens": [2, "as-needed", { requireForBlockBody: true }],
    "consistent-return": "off",
    "no-use-before-define": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-tag-spacing": "off",
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": [2, { ignorePureComponents: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "func-style": [2, "expression"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
