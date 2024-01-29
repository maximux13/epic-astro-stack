import { z } from "astro/zod";

export const schema = z.object({
  PUBLIC_SITE_URL: z.string().url().default("http://localhost:4321"),
  SECRET_SENTRY_AUTH_TOKEN: z.string().optional(),
  SECRET_SENTRY_ORG: z.string().optional(),
  SECRET_SENTRY_PROJECT: z.string().optional(),
  SECRET_SENTRY_RELEASE: z.string().optional(),
});

/**
 *  Get environment variables from the process.env object and validate them
 *
 * @returns {ImportMetaEnv}
 */
export function getEnv() {
  const parsed = schema.safeParse(process.env);

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );

    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}
