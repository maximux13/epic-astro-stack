import "dotenv/config";
import icon from "astro-icon";
import sentry from "@sentry/astro";
import sitemap from "astro-sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import spotlightjs from "@spotlightjs/astro";
import serviceWorker from "astrojs-service-worker";
import { squooshImageService, defineConfig, envField } from "astro/config";

import manifest from "./manifest";
import svgoOptions from "./svgo.config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_SITE_URL: envField.string({
          access: "public",
          context: "client",
          optional: false,
        }),
        SECRET_SENTRY_AUTH_TOKEN: envField.string({
          access: "secret",
          context: "server",
          optional: true,
        }),
        SECRET_SENTRY_ORG: envField.string({
          access: "secret",
          context: "server",
          optional: true,
        }),
        SECRET_SENTRY_PROJECT: envField.string({
          access: "secret",
          context: "server",
          optional: true,
        }),
        SECRET_SENTRY_RELEASE: envField.string({
          access: "secret",
          context: "server",
          optional: true,
        }),
      },
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: squooshImageService(),
  },
  integrations: [
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
