module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: ["airbnb-base", "plugin:vue/base"],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module"
  },

  rules: {
    "comma-dangle": ["warn", "never"],
    quotes: 1,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  root: true,

  extends: ["airbnb-base", "plugin:vue/base", "plugin:vue/essential", "@vue/airbnb"]
};
