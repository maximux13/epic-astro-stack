import icon from "astro-icon";
import sentry from "@sentry/astro";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import spotlightjs from "@spotlightjs/astro";
import { squooshImageService, defineConfig } from "astro/config";

import svgoOptions from "./svgo.config";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: squooshImageService(),
  },
  integrations: [
    tailwind(),
    icon({
      svgoOptions,
    }),
    sentry({
      release: process.env.SENTRY_RELEASE,
      sourceMapsUploadOptions: {
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
      },
    }),
    spotlightjs(),
    sitemap(),
  ],
  site: process.env.SITE_URL || "http://localhost:4321",
});
