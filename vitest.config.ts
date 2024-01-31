/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    coverage: {
      all: true,
      include: ["src/**/*.{ts,astro,js}"],
    },
    environment: "jsdom",
    include: ["test/*.{test,spec}.{ts,js}"],
    restoreMocks: true,
    setupFiles: ["vitest-setup.ts"],
  },
});
