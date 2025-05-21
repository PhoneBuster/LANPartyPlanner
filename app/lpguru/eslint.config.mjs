// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(eslintPluginPrettierRecommended, {
  languageOptions: {
    globals: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
});
