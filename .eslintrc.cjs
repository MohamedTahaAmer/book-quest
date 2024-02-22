module.exports = {
  extends: ["prettier", "plugin:tailwindcss/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    // warn, error, off
    "no-unused-vars": ["warn"],
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
}
