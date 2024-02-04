# Components

## Folder Structure

The `components` directory is structured to facilitate easy navigation and consistency. Below is an overview of how components are organized:

```
components/
└── ui/
    └── Button/
        ├── Button.astro
        └── index.ts
    index.ts (exports all base UI components)
└── Header/
    ├── Header.astro
    └── index.ts
```

- **ui/**: Contains base UI components like buttons, links, etc., serving as the foundation for more complex components.

- **component/**: Contains more complex components like headers, footers, etc., built using base UI components.

### Creating a New Component

Follow these steps to ensure consistency when adding a new component:

1. **Determine the Component Category**: Decide if it's a base UI component or more complex. Place base UI components within the `UI` folder.

2. **Create a Component Folder**: Make a new folder under the appropriate category named after the component in PascalCase.

3. **Add Component Files**:

   - **.astro File**: Contains the HTML structure and TailwindCSS styling.
   - **index.ts File**: Exports the component for easy access elsewhere in the project.

4. **Styling with TailwindCSS**: Use TailwindCSS for styling in the `.astro` file to maintain consistency and leverage the utility-first framework.

5. **Document**: Include documentation in the `.astro` file about the component's purpose, props, and usage for clarity.

By adhering to these guidelines, we ensure our component directory remains organized and scalable, providing a straightforward experience for developers.
