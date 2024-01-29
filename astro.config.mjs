import icon from "astro-icon";
import sentry from "@sentry/astro";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import spotlightjs from "@spotlightjs/astro";
import { imageService } from "@unpic/astro/service";

import svgoOptions from "./svgo.config";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: imageService({
      fallbackService: "squoosh",
      placeholder: "blurhash",
    }),
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
  site: process.env.SITE_URL,
});
