module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: ["airbnb-base", "plugin:vue/base"],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "linebreak-style": 0,
    "comma-dangle": 0,
    quotes: 0,
    "arrow-parens": 0,
    "max-len": 0,
  },

  root: true,

  extends: ["airbnb-base", "plugin:vue/base", "plugin:vue/essential", "@vue/airbnb"],
};
