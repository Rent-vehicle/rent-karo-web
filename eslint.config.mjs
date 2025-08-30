import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      // ⬆️ allows console.warn/error but blocks console.log
    },
  },
];
