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
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarSection,
  SidebarNavItem,
  SidebarProvider,
  SidebarCollapseButton,
} from "@/components/design-system/navigation/sidebar";
import ThemeToggle from "@/components/design-system/theme-toggle";
import {
  Home,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  BarChart2,
  Inbox,
  Search,
} from "lucide-react";
import { Badge } from "@/components/design-system/badge/badge";

const SidebarDemo = () => {
  return (
    <div className="relative border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden h-[600px]">
      <SidebarProvider>
        <div className="flex w-full h-full">
          <Sidebar className="relative h-full">
            <SidebarHeader title="Design System" />
            <SidebarContent>
              <SidebarSection title="Main">
                <SidebarNavItem icon={<Home />} title="Dashboard" active />
                <SidebarNavItem icon={<BarChart2 />} title="Analytics" />
                <SidebarNavItem
                  icon={<Inbox />}
                  title="Inbox"
                  badge={
                    <Badge variant="error" size="sm">
                      3
                    </Badge>
                  }
                />
                <SidebarNavItem icon={<Users />} title="Team Members" />
              </SidebarSection>

              <SidebarSection title="Settings">
                <SidebarNavItem icon={<Settings />} title="Preferences" />
                <SidebarNavItem icon={<Search />} title="Search" />
                <SidebarNavItem icon={<HelpCircle />} title="Help & Support" />
              </SidebarSection>
            </SidebarContent>
            <SidebarFooter>
              <SidebarCollapseButton />
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-900/60">
            <h2 className="text-xl font-medium mb-4">Dashboard</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              This is a demo of the Sidebar component. The sidebar can be
              collapsed using the button at the bottom or expanded by clicking
              the toggle.
            </p>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

const SidebarPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <ComponentDoc
        title="Sidebar Navigation"
        description="A collapsible sidebar component for primary navigation in applications."
      >
        <ComponentSection
          title="Overview"
          description="The Sidebar component provides a consistent navigation pattern for applications. It can be collapsed to save space and expanded when users need to navigate between different sections of the application."
        >
          <ComponentExample
            title="Interactive Demo"
            description="Explore the sidebar behavior with this interactive example. Click the collapse button in the footer to toggle the sidebar's expanded state."
          >
            <SidebarDemo />
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="Anatomy"
          description="The sidebar is composed of several components that can be combined to create a complete navigation system."
        >
          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>The sidebar is structured with these key components:</p>
            <ul>
              <li>
                <strong>SidebarProvider</strong>: Context provider that manages
                the expanded/collapsed state
              </li>
              <li>
                <strong>Sidebar</strong>: Main container component
              </li>
              <li>
                <strong>SidebarHeader</strong>: Contains the logo and/or title
              </li>
              <li>
                <strong>SidebarContent</strong>: Main content area containing
                navigation items
              </li>
              <li>
                <strong>SidebarSection</strong>: Groups related navigation items
                with an optional title
              </li>
              <li>
                <strong>SidebarNavItem</strong>: Individual navigation link or
                button
              </li>
              <li>
                <strong>SidebarFooter</strong>: Bottom section, often containing
                the collapse button
              </li>
              <li>
                <strong>SidebarCollapseButton</strong>: Button to toggle the
                expanded/collapsed state
              </li>
              <li>
                <strong>SidebarTrigger</strong>: Mobile toggle button to
                show/hide the sidebar
              </li>
            </ul>
          </div>
        </ComponentSection>

        <ComponentSection
          title="Behavior"
          description="The sidebar provides consistent navigation behavior across different screen sizes."
        >
          <div className="prose dark:prose-invert max-w-none">
            <h3>Responsive Behavior</h3>
            <p>The sidebar adapts to different screen sizes:</p>
            <ul>
              <li>
                <strong>Desktop:</strong> Sidebar can be expanded or collapsed,
                remains visible on screen
              </li>
              <li>
                <strong>Mobile:</strong> Sidebar is hidden by default and can be
                toggled on/off with the SidebarTrigger
              </li>
            </ul>

            <h3>States</h3>
            <p>The sidebar has two primary states:</p>
            <ul>
              <li>
                <strong>Expanded:</strong> Full width sidebar showing both icons
                and text (default on desktop)
              </li>
              <li>
                <strong>Collapsed:</strong> Narrow sidebar showing only icons,
                expands on hover (optional)
              </li>
            </ul>

            <h3>Navigation Items</h3>
            <p>Navigation items have several states:</p>
            <ul>
              <li>
                <strong>Default:</strong> Normal state
              </li>
              <li>
                <strong>Hover:</strong> Visual feedback when the user hovers
                over an item
              </li>
              <li>
                <strong>Active:</strong> Indicates the current section/page
              </li>
              <li>
                <strong>Disabled:</strong> Indicates an item that cannot be
                accessed
              </li>
            </ul>
          </div>
        </ComponentSection>

        <ComponentSection
          title="API Reference"
          description="Detailed information about the Sidebar components and their props."
        >
          <h3 className="text-xl font-medium mb-4">SidebarProvider</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description: "Content to be wrapped by the provider.",
              },
              {
                name: "defaultExpanded",
                type: "boolean",
                defaultValue: "true",
                description: "Whether the sidebar is expanded by default.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">Sidebar</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description: "Content to be rendered inside the sidebar.",
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes to apply to the sidebar.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">SidebarHeader</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description: "Custom content for the header.",
              },
              {
                name: "logo",
                type: "React.ReactNode",
                description: "Logo element to display in the header.",
              },
              {
                name: "title",
                type: "string",
                description: "Title text to display in the header.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">SidebarContent</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description:
                  "Content to be rendered inside the sidebar content area.",
              },
              {
                name: "className",
                type: "string",
                description:
                  "Additional CSS classes to apply to the content area.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">SidebarNavItem</h3>
          <PropTable
            props={[
              {
                name: "icon",
                type: "React.ReactElement",
                description: "Icon to display for the navigation item.",
              },
              {
                name: "title",
                type: "string",
                description: "Label text for the navigation item.",
              },
              {
                name: "active",
                type: "boolean",
                defaultValue: "false",
                description: "Whether the item is currently active.",
              },
              {
                name: "disabled",
                type: "boolean",
                defaultValue: "false",
                description: "Whether the item is disabled.",
              },
              {
                name: "badge",
                type: "React.ReactNode",
                description: "Optional badge to display with the item.",
              },
              {
                name: "onClick",
                type: "() => void",
                description: "Callback function when the item is clicked.",
              },
              {
                name: "href",
                type: "string",
                description: "URL for the item when it should act as a link.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">SidebarSection</h3>
          <PropTable
            props={[
              {
                name: "title",
                type: "string",
                description: "Optional title for the section.",
              },
              {
                name: "children",
                type: "React.ReactNode",
                description: "Navigation items to include in the section.",
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes to apply to the section.",
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Accessibility"
          description="Accessibility considerations and compliance checklist for the Sidebar component."
        >
          <AccessibilityChecklist
            checks={[
              {
                category: "Keyboard Navigation",
                items: [
                  {
                    check: "All interactive elements are keyboard accessible",
                    status: "pass",
                  },
                  {
                    check: "Focus order follows a logical sequence",
                    status: "pass",
                  },
                  {
                    check: "Toggle buttons communicate their state",
                    status: "pass",
                  },
                ],
              },
              {
                category: "ARIA Attributes",
                items: [
                  {
                    check: "aria-expanded used on collapsible elements",
                    status: "pass",
                  },
                  {
                    check: "aria-current used to indicate active page",
                    status: "pass",
                  },
                  {
                    check:
                      "aria-label provided for buttons without visible text",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Screen Readers",
                items: [
                  {
                    check: "Toggle buttons announce their purpose and state",
                    status: "pass",
                  },
                  {
                    check: "Navigation landmarks are properly identified",
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
                    check:
                      "Active states are visually distinct and not only color-dependent",
                    status: "pass",
                  },
                  {
                    check: "Sufficient color contrast for all text",
                    status: "pass",
                  },
                ],
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Best Practices"
          description="Guidelines for using the Sidebar component effectively."
        >
          <DosDonts
            dos={[
              "Organize navigation items in logical groups",
              "Use clear, descriptive labels for navigation items",
              "Include icons to improve recognition and scan-ability",
              "Highlight the current page or section",
              "Make the most important navigation items easily accessible",
              "Ensure the sidebar works well on mobile devices",
            ]}
            donts={[
              "Don't overcrowd the sidebar with too many items",
              "Don't use ambiguous or generic labels for navigation items",
              "Don't hide critical functionality in collapsed sections",
              "Don't rely solely on icons without labels for navigation",
              "Don't use the sidebar for actions that should be page-specific",
              "Don't make the collapsed sidebar too narrow to interact with",
            ]}
          />
        </ComponentSection>
      </ComponentDoc>
    </div>
  );
};

export default SidebarPage;
