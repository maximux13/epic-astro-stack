import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
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
  ],
});
