import { encode } from "blurhash";
import { getPixels } from "@unpic/pixels";

import type { RemoteImageProps, LocalImageProps } from "astro:assets";

/**
 * Retrieves the source URL from the given image source.
 *
 * @param src - The image source, which can be either a string, a module with a `default` property, or a promise that resolves to an image module.
 * @returns A promise that resolves to the source URL of the image.
 * @throws {Error} If the image source is invalid.
 */
export const getSrc = async (
  src: RemoteImageProps["src"] | LocalImageProps["src"],
): Promise<string> => {
  if (typeof src === "string") return src;

  if ("default" in src && typeof src.default === "string") {
    return src.default;
  }

  if ("then" in src) {
    const result = await src;
    return result.default.src;
  }

  throw new Error("Invalid src");
};

/**
 * Retrieves the blurhash for an image.
 *
 * @param image - The source of the image.
 * @param size - The desired size of the blurhash.
 * @returns The blurhash string.
 */
export const getBlurhash = async (
  image: RemoteImageProps["src"] | LocalImageProps["src"],
  size: [number, number],
) => {
  const src = await getSrc(image);
  const pixels = await getPixels(src);
  const data = Uint8ClampedArray.from(pixels.data);

  const blurhash = encode(data, pixels.width, pixels.height, size[0], size[1]);

  return blurhash;
};
