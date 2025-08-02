module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "prettier"],
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect"
    }
  }
};