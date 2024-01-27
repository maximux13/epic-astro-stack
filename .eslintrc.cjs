module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
    "plugin:perfectionist/recommended-line-length",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
      },
      rules: {},
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "perfectionist"],
  root: true,
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        "custom-groups": {
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
        "internal-pattern": ["@/**"],
        "newlines-between": "always",
        order: "asc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        order: "asc",
        type: "natural",
      },
    ],
  },
};
