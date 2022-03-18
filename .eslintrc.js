// npm 을 통해 설치한 eslint 에 의해
// ts 문법을 보조하고 있다고 보면 됨.

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-const": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
