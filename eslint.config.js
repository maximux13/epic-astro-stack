import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  },
  {
    ignores: [
      "coverage/*",
      "dist/*",
      ".astro/*",
      "node_modules/*",
      "test-results/*",
      "playwright-report/*",
    ],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...tseslint.configs.strict,
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          maxLineLength: undefined,
          customGroups: {
            value: {
              astro: ["astro", "astro:*"],
              components: ["@/components/**"],
              layouts: ["@/layouts/**"],
              services: ["@/services/**"],
              utils: ["@/utils/**"],
            },
          },
          groups: [
            "builtin",
            "astro",
            "external",
            "utils",
            "services",
            "layouts",
            "components",
            [
              "type",
              "parent-type",
              "sibling-type",
              "index-type",
              "internal-type",
            ],
            ["parent", "sibling", "index"],
            "object",
            "style",
            "unknown",
          ],
          internalPattern: ["@/**"],
          newlinesBetween: "always",
          environment: "node",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
