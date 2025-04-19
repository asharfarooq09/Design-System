import React from "react";
import {
  ComponentDoc,
  ComponentSection,
  ComponentExample,
  PropTable,
  AccessibilityChecklist,
  DosDonts,
} from "@/components/storybook/component-doc";
import {
  Accordion,
  AccordionItem,
} from "@/components/design-system/accordion/accordion";
import ThemeToggle from "@/components/design-system/theme-toggle";

const AccordionPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <ComponentDoc
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      >
        <ComponentSection
          title="Overview"
          description="The Accordion component allows users to expand and collapse sections of content, making it easier to scan and navigate through a document. It's particularly useful for FAQ sections, detailed information, or any content that benefits from progressive disclosure."
        >
          <ComponentExample
            title="Basic Accordion"
            description="A simple accordion with three sections. Click on a header to expand or collapse its content."
            code={`<Accordion>
  <AccordionItem title="Section 1" defaultOpen>
    <p>Content for section 1</p>
  </AccordionItem>
  <AccordionItem title="Section 2">
    <p>Content for section 2</p>
  </AccordionItem>
  <AccordionItem title="Section 3">
    <p>Content for section 3</p>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion>
              <AccordionItem
                title="What is an accordion component?"
                defaultOpen
              >
                <p className="text-neutral-700 dark:text-neutral-300">
                  An accordion is a vertically stacked set of interactive
                  headings that each contain a title, content snippet, or
                  thumbnail representing a section of content. The headings
                  function as controls that enable users to reveal or hide their
                  associated sections of content.
                </p>
              </AccordionItem>
              <AccordionItem title="When should I use an accordion?">
                <p className="text-neutral-700 dark:text-neutral-300">
                  Accordions are useful when you want to toggle between hiding
                  and showing large amounts of content. They help reduce page
                  length and allow users to scan through multiple topics quickly
                  without overwhelming them with information all at once.
                </p>
              </AccordionItem>
              <AccordionItem title="How does it improve accessibility?">
                <p className="text-neutral-700 dark:text-neutral-300">
                  When properly implemented, accordions improve accessibility
                  by:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700 dark:text-neutral-300">
                  <li>
                    Reducing cognitive load by hiding content until needed
                  </li>
                  <li>Supporting keyboard navigation</li>
                  <li>Using proper ARIA attributes for screen readers</li>
                  <li>Maintaining focus management during interactions</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection title="Variants">
          <ComponentExample
            title="Disabled Item"
            description="An accordion can have disabled items that cannot be interacted with."
            code={`<Accordion>
  <AccordionItem title="Available section">
    <p>This section can be expanded and collapsed.</p>
  </AccordionItem>
  <AccordionItem title="Disabled section" disabled>
    <p>This section cannot be interacted with.</p>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion>
              <AccordionItem title="Available section">
                <p className="text-neutral-700 dark:text-neutral-300">
                  This section can be expanded and collapsed.
                </p>
              </AccordionItem>
              <AccordionItem title="Disabled section" disabled>
                <p className="text-neutral-700 dark:text-neutral-300">
                  This section cannot be interacted with.
                </p>
              </AccordionItem>
            </Accordion>
          </ComponentExample>

          <ComponentExample
            title="Default Open"
            description="You can specify which accordion items should be open by default."
            code={`<Accordion>
  <AccordionItem title="Default closed">
    <p>This starts closed.</p>
  </AccordionItem>
  <AccordionItem title="Default open" defaultOpen>
    <p>This starts open.</p>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion>
              <AccordionItem title="Default closed">
                <p className="text-neutral-700 dark:text-neutral-300">
                  This starts closed.
                </p>
              </AccordionItem>
              <AccordionItem title="Default open" defaultOpen>
                <p className="text-neutral-700 dark:text-neutral-300">
                  This starts open.
                </p>
              </AccordionItem>
            </Accordion>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="API Reference"
          description="Detailed information about the Accordion component props and usage."
        >
          <h3 className="text-xl font-medium mb-4">Accordion Component</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description:
                  "AccordionItem components to be rendered inside the accordion.",
              },
              {
                name: "className",
                type: "string",
                description:
                  "Additional CSS class names to apply to the accordion container.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">AccordionItem Component</h3>
          <PropTable
            props={[
              {
                name: "title",
                type: "string",
                description: "The title displayed in the accordion header.",
              },
              {
                name: "children",
                type: "React.ReactNode",
                description:
                  "Content to be displayed when the accordion item is expanded.",
              },
              {
                name: "defaultOpen",
                type: "boolean",
                defaultValue: "false",
                description:
                  "Whether the accordion item is expanded by default.",
              },
              {
                name: "disabled",
                type: "boolean",
                defaultValue: "false",
                description:
                  "Whether the accordion item is disabled and cannot be interacted with.",
              },
              {
                name: "id",
                type: "string",
                description:
                  "Optional unique identifier for the accordion item. If not provided, a random ID will be generated.",
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Accessibility"
          description="Accessibility considerations and compliance checklist for the Accordion component."
        >
          <AccessibilityChecklist
            checks={[
              {
                category: "Keyboard Navigation",
                items: [
                  {
                    check: "Accordion headers are focusable using the Tab key",
                    status: "pass",
                  },
                  {
                    check: "Enter or Space key toggles the accordion item",
                    status: "pass",
                  },
                  {
                    check: "Focus is properly managed during interaction",
                    status: "pass",
                  },
                ],
              },
              {
                category: "ARIA Attributes",
                items: [
                  {
                    check: "Uses aria-expanded to indicate expansion state",
                    status: "pass",
                  },
                  {
                    check:
                      "Uses aria-controls to associate header with content",
                    status: "pass",
                  },
                  {
                    check: "Uses aria-disabled for disabled items",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Screen Readers",
                items: [
                  {
                    check: "Headers announce their expanded/collapsed state",
                    status: "pass",
                  },
                  {
                    check: "Content regions have proper labels",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Visual Design",
                items: [
                  {
                    check: "Focus states are clearly visible",
                    status: "pass",
                  },
                  {
                    check: "Sufficient color contrast for all text",
                    status: "pass",
                    notes: "Contrast ratio of 4.5:1 or greater for text",
                  },
                  {
                    check: "Disabled states are visually distinct",
                    status: "pass",
                  },
                ],
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Best Practices"
          description="Guidelines for using the Accordion component effectively."
        >
          <DosDonts
            dos={[
              "Use accordions for content that can be broken into logical sections",
              "Keep header text short and descriptive",
              "Consider allowing multiple sections to be open at once for complex content",
              "Ensure the most important information is visible without expanding",
              "Use defaultOpen for the most relevant section when appropriate",
            ]}
            donts={[
              "Don't nest accordions inside other accordions",
              "Don't hide critical information behind accordions",
              "Don't use accordions for very short content sections",
              "Don't use generic headers like 'Click here' or 'More'",
              "Don't use accordions as navigation elements",
            ]}
          />
        </ComponentSection>
      </ComponentDoc>
    </div>
  );
};

export default AccordionPage;
