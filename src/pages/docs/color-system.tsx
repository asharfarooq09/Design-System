import React from "react";
import {
  ComponentDoc,
  ComponentSection,
  ComponentExample,
} from "@/components/storybook/component-doc";
import ColorPalette from "@/components/design-system/color-system/color-palette";
import ThemeToggle from "@/components/design-system/theme-toggle";

const ColorSystemPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <ComponentDoc
        title="Color System"
        description="A comprehensive token-based color system for enterprise applications with support for light and dark modes."
      >
        <ComponentSection
          title="Overview"
          description="Our color system is designed to support B2B enterprise UI needs with consistent, accessible colors across the application. It includes primary, secondary, tertiary, neutral, and semantic colors with varying shades for different use cases."
        >
          <div className="prose dark:prose-invert max-w-none">
            <h3>Design Principles</h3>
            <ul>
              <li>
                <strong>Accessibility:</strong> All color combinations meet WCAG
                2.1 AA standards for contrast ratios
              </li>
              <li>
                <strong>Consistency:</strong> Consistent naming and usage
                patterns across the design system
              </li>
              <li>
                <strong>Flexibility:</strong> Comprehensive palette with
                multiple shades for different UI needs
              </li>
              <li>
                <strong>Themeable:</strong> Support for both light and dark
                modes
              </li>
            </ul>

            <h3>Implementation</h3>
            <p>
              The color system is implemented using CSS variables and Tailwind
              CSS utility classes. This approach provides flexibility while
              maintaining consistency across the application.
            </p>

            <h3>Naming Convention</h3>
            <p>Colors follow a structured naming convention:</p>
            <ul>
              <li>
                <code>primary-500</code>: Primary color, medium shade
              </li>
              <li>
                <code>secondary-600</code>: Secondary color, darker shade
              </li>
              <li>
                <code>error-300</code>: Error semantic color, light shade
              </li>
            </ul>

            <p>
              Semantic colors follow purpose-based naming: success, info,
              warning, error.
            </p>
          </div>
        </ComponentSection>

        <ComponentSection
          title="Color Palette"
          description="Explore the complete color palette with all available shades."
        >
          <ComponentExample
            title="Color Variations"
            description="View all colors in the design system."
          >
            <ColorPalette />
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="Usage Guidelines"
          description="Best practices for using colors effectively and accessibly in your application."
        >
          <div className="prose dark:prose-invert max-w-none">
            <h3>Accessibility Guidelines</h3>
            <p>When using colors in your UI:</p>
            <ul>
              <li>
                Ensure text has a contrast ratio of at least 4.5:1 against its
                background (WCAG AA)
              </li>
              <li>
                Don't rely solely on color to convey information; always use
                additional indicators
              </li>
              <li>
                Use darker shades (600-900) for text and lighter shades (50-400)
                for backgrounds
              </li>
              <li>
                Test your color combinations in both light and dark themes
              </li>
            </ul>

            <h3>Color Function Usage</h3>
            <ul>
              <li>
                <strong>Primary:</strong> Use for main actions, key UI elements,
                and brand identification
              </li>
              <li>
                <strong>Secondary:</strong> Use for secondary actions,
                supporting UI elements
              </li>
              <li>
                <strong>Tertiary:</strong> Use for accent elements, highlights,
                and visual interest
              </li>
              <li>
                <strong>Neutral:</strong> Use for text, backgrounds, borders,
                and other structural elements
              </li>
              <li>
                <strong>Semantic:</strong> Use to communicate status, feedback,
                or actions with clear meaning
              </li>
            </ul>
          </div>
        </ComponentSection>
      </ComponentDoc>
    </div>
  );
};

export default ColorSystemPage;
