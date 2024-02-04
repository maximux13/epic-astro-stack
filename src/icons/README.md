# Icon Usage Documentation

This document outlines the guidelines for using icons in the application with the astroicons.dev integration. It focuses on handling SVGs for effective use as icons and the option to incorporate icon packs from @iconify-json/\*.

## Using astroicons.dev Integration

Astroicons.dev provides a straightforward way to incorporate icons into your Astro project. You can add custom SVG icons or utilize supported icon sets for enhanced flexibility and customization.

### Adding Custom Icons

1. **Custom SVG Icons**: Place your `.svg` files in the `/src/icons/` directory. You may organize icons into sub-folders to create multiple sets.

2. **Usage in Components**: Use the `Icon` component to embed your icons. For example, to include a custom logo icon, add the following in your Astro component:

```astro
---
import { Icon } from "astro-icon/components";
---

<Icon name="logo" />
```

Replace `"logo"` with the path to your icon relative to the `/src/icons/` directory, considering any sub-folders as part of the path.

### Utilizing @iconify-json/\* Icon Packs

Astro Icon supports all @iconify-json/\* packages, enabling you to use a vast collection of icons. To use icons from these packs:

1. **Installation**: Ensure the desired @iconify-json/\* package is installed in your project.

2. **Referencing Icons**: Use the `Icon` component, similar to custom SVGs, but specify the icon set and icon name. Documentation on specific syntax for @iconify-json icons can be found in their respective documentation.

### Icon Component Props

The `Icon` component supports several props to customize the icons:

- **`name`:** The name (or path) of the icon.
- **`title`:** Adds a `<title>` tag to the SVG for accessibility.
- **`size`, `width`, `height`:** Specify the size of the icon. `size` applies to both width and height.

In addition to these, you can pass any standard HTML attributes to customize the SVG further.

### Optimizing Icon Usage

Astro Icon automatically optimizes repeated references to the same icon on a page using sprites. This feature reduces the overall size of your HTML document by deduplicating icons.

## SVG Icons Considerations

When adding SVG icons to the `/src/icons/` directory for use with astro-icons, keep the following considerations in mind to ensure they integrate seamlessly into your application:

- **Color Handling**: Set the color properties (`fill` or `stroke`) of your SVG icons to `currentColor`. This allows the icons to inherit the text color of their parent element, making it easier to style icons with CSS.

- **Viewport and Icon Sizes**: Define a `viewBox` in your SVG icons. This attribute is crucial for ensuring that icons scale properly across different sizes. It allows the SVG to be responsive and adjust dynamically to the assigned UI space.

- **CSS Size Properties**: While the SVG's `viewBox` ensures responsiveness, specifying the icon dimensions (`width` and `height`) in CSS provides control over the icon size in different application contexts, facilitating scalability and adaptability.

- **Design Simplicity**: Maintain a simple and clean icon design. This enhances readability and comprehension at small scales and ensures faster loading and better rendering across various browsers and devices.

- **Testing in Different Contexts**: Test your icons in various application contexts after applying dynamic CSS styles. This includes checking appearance and behavior across light/dark modes, screen sizes, and browsers to ensure consistency.

Incorporating these practices will ensure your SVG icons are well-prepared for use in your project, offering flexibility and adaptability needed for modern web design.

## Conclusion

By following these guidelines, you can effectively use and manage icons within your Astro-based application. For more advanced customization options or troubleshooting, refer to the [astroicons.dev documentation](https://www.astroicon.dev/).
