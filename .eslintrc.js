module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
  },
};