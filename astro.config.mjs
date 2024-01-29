import "dotenv/config";
import env from "astro-env";
import { z } from "astro/zod";
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
      schema: z.object({
        PUBLIC_SITE_URL: z.string().url(),
        SECRET_SENTRY_AUTH_TOKEN: z.string().optional(),
        SECRET_SENTRY_ORG: z.string().optional(),
        SECRET_SENTRY_PROJECT: z.string().optional(),
        SECRET_SENTRY_RELEASE: z.string().optional(),
      }),
    }),
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
  site: process.env.PUBLIC_SITE_URL,
});
