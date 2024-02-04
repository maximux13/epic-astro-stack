# Image Handling with @unpic/astro

## Overview

This guide describes how to efficiently use images in your Astro project using `@unpic/astro`. This library enhances your images by making them responsive and optimized for different devices and screen sizes.

## Using the Image Component

The `Image` component from `@unpic/astro` automatically generates optimized and responsive images. Simply import and use it in your Astro files:

```astro
---
import { Image } from "@unpic/astro";
---

<Image src="your-image-url.jpg" alt="Description" width={800} height={600} />
```

## Art Direction with Source Component

For art direction, use the `Source` component within a `<picture>` element to specify different images for various screen sizes:

```astro
---
import { Image, Source } from "@unpic/astro";
---

<picture>
  <Source src="large-image.jpg" media="(min-width: 800px)" />
  <Image src="small-image.jpg" alt="Description" />
</picture>
```

## Placeholder Images

To improve the loading experience, `@unpic/astro` supports placeholder images. You can specify the type of placeholder in the component props:

```astro
<Image src="your-image-url.jpg" placeholder="blurhash" alt="Description" />
```

## Configuration and Props

Customize your images with various props like `layout`, `priority`, and `background`. Refer to the official `@unpic/astro` documentation for a full list of properties and how to use them.

## Conclusion

`@unpic/astro` simplifies image management in your Astro projects, ensuring they are responsive and optimized. For further information, visit [Unpic.pics](https://unpic.pics/img/astro/).
