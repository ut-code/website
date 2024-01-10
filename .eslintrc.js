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
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@components", "./src/components"],
          ["@images", "./src/images"],
          ["@pages", "./src/pages"],
          ["@templates", "./src/templates"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  ignorePatterns: ["/public/**"],
};
