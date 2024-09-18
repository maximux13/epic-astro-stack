import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";
import webmanifest from "astro-webmanifest";
import { defineConfig, envField } from "astro/config";
import serviceWorker from "astrojs-service-worker";
import "dotenv/config";
import { optimize } from "svgo";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icon from "unplugin-icons/vite";

import manifest from "./manifest.mjs";
import svgoOptions from "./svgo.config.mjs";

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
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
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
  vite: {
    plugins: [
      Icon({
        customCollections: {
          local: FileSystemIconLoader("src/icons", (svg) => {
            return optimize(svg, svgoOptions).data;
          }),
        },
        compiler: "astro",
      }),
    ],
  },
});
