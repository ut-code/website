/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    // for-of 構文を使いたい
    "no-restricted-syntax": "off",
    // TypeScript と相性が悪い
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
  },
  ignorePatterns: ["/public/**"],
};
