import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
);
