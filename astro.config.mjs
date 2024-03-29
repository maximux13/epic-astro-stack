import "dotenv/config";
import env from "astro-env";
import { z } from "astro/zod";
import icon from "astro-icon";
import sentry from "@sentry/astro";
import sitemap from "astro-sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import spotlightjs from "@spotlightjs/astro";
import serviceWorker from "astrojs-service-worker";
import { squooshImageService, defineConfig } from "astro/config";

import manifest from "./manifest";
import svgoOptions from "./svgo.config";

const schema = z.object({
  PUBLIC_SITE_URL: z.string().url(),
  SECRET_SENTRY_AUTH_TOKEN: z.string().optional(),
  SECRET_SENTRY_ORG: z.string().optional(),
  SECRET_SENTRY_PROJECT: z.string().optional(),
  SECRET_SENTRY_RELEASE: z.string().optional(),
});

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
    env({
      generateEnvTemplate: true,
      generateTypes: true,
      schema,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        "radix-icons": ["heart-filled", "arrow-left", "globe"],
      },
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
