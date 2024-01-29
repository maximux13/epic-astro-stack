import "dotenv/config";
import env from "astro-env";
import icon from "astro-icon";
import sentry from "@sentry/astro";
import sitemap from "astro-sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import webmanifest from "astro-webmanifest";
import spotlightjs from "@spotlightjs/astro";
import serviceWorker from "astrojs-service-worker";
import { imageService } from "@unpic/astro/service";

import manifest from "./manifest";
import svgoOptions from "./svgo.config";
import { schema, getEnv } from "./src/utils/env";

const envs = getEnv();

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
    env({
      generateEnvTemplate: true,
      generateTypes: true,
      schema,
    }),
    tailwind(),
    icon({
      svgoOptions,
    }),
    sentry({
      release: envs.SENTRY_RELEASE,
      sourceMapsUploadOptions: {
        authToken: envs.SENTRY_AUTH_TOKEN,
        org: envs.SENTRY_ORG,
        project: envs.SENTRY_PROJECT,
        telemetry: false,
      },
    }),
    spotlightjs(),
    robotsTxt({
      policy: [
        {
          disallow: "/",
          link: [
            {
              href: "/humans.txt",
              rel: "author",
            },
          ],
          userAgent: "*",
        },
      ],
      sitemap: true,
    }),
    webmanifest(manifest),
    serviceWorker(),
    sitemap(),
  ],
  site: envs.PUBLIC_SITE_URL,
});
