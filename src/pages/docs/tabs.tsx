import React from "react";
import {
  ComponentDoc,
  ComponentSection,
  ComponentExample,
  PropTable,
  AccessibilityChecklist,
  DosDonts,
} from "@/components/storybook/component-doc";
import { Tabs, Tab } from "@/components/design-system/navigation/tabs";
import ThemeToggle from "@/components/design-system/theme-toggle";
import {
  Home,
  Users,
  Settings,
  BarChart2,
  FileText,
  Image,
} from "lucide-react";

const TabsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <ComponentDoc
        title="Tabs"
        description="A set of layered sections of content, known as tab panels, that display one panel at a time."
      >
        <ComponentSection
          title="Overview"
          description="Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. Each tab panel contains a different set of content."
        >
          <ComponentExample
            title="Basic Tabs"
            description="A simple horizontal tab interface with three panels."
            code={`<Tabs defaultValue="dashboard">
  <Tab label="Dashboard" value="dashboard">
    <p>Dashboard content here</p>
  </Tab>
  <Tab label="Settings" value="settings">
    <p>Settings content here</p>
  </Tab>
  <Tab label="Profile" value="profile">
    <p>Profile content here</p>
  </Tab>
</Tabs>`}
          >
            <Tabs defaultValue="dashboard">
              <Tab label="Dashboard" value="dashboard">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Dashboard</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This is the dashboard panel content. You would typically put
                    charts, metrics, and other summary information here.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
                      <div className="font-medium mb-1">Total Users</div>
                      <div className="text-2xl font-bold">1,248</div>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
                      <div className="font-medium mb-1">Active Projects</div>
                      <div className="text-2xl font-bold">32</div>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
                      <div className="font-medium mb-1">Revenue</div>
                      <div className="text-2xl font-bold">$24,500</div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Settings" value="settings">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Settings</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This is the settings panel content. You would typically put
                    forms and configuration options here.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200 dark:border-neutral-700">
                      <div>
                        <div className="font-medium">Notifications</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          Manage your notification preferences
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">
                        Configure
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200 dark:border-neutral-700">
                      <div>
                        <div className="font-medium">Security</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          Manage your security settings
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">
                        Configure
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200 dark:border-neutral-700">
                      <div>
                        <div className="font-medium">Appearance</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          Customize the interface appearance
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Profile" value="profile">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This is the profile panel content. You would typically put
                    user information and preferences here.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-semibold text-primary">
                        JD
                      </span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">John Doe</div>
                      <div className="text-neutral-500 dark:text-neutral-400">
                        Administrator
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        john.doe@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection title="Variants">
          <ComponentExample
            title="Tabs with Icons"
            description="Tabs can include icons to improve recognition and scan-ability."
            code={`<Tabs defaultValue="home">
  <Tab label="Home" value="home" icon={<Home />}>
    <p>Home content</p>
  </Tab>
  <Tab label="Users" value="users" icon={<Users />}>
    <p>Users content</p>
  </Tab>
  <Tab label="Settings" value="settings" icon={<Settings />}>
    <p>Settings content</p>
  </Tab>
</Tabs>`}
          >
            <Tabs defaultValue="home">
              <Tab label="Home" value="home" icon={<Home />}>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Home content goes here. This is typically the default view
                  that users see first.
                </p>
              </Tab>
              <Tab label="Users" value="users" icon={<Users />}>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Users content goes here. This might contain a list of users or
                  user management features.
                </p>
              </Tab>
              <Tab label="Settings" value="settings" icon={<Settings />}>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Settings content goes here. This would contain application
                  configuration options.
                </p>
              </Tab>
            </Tabs>
          </ComponentExample>

          <ComponentExample
            title="Disabled Tab"
            description="Tabs can be disabled to indicate that they cannot be accessed."
            code={`<Tabs defaultValue="one">
  <Tab label="Tab One" value="one">
    <p>Content for Tab One</p>
  </Tab>
  <Tab label="Tab Two" value="two">
    <p>Content for Tab Two</p>
  </Tab>
  <Tab label="Disabled" value="disabled" disabled>
    <p>This content cannot be accessed</p>
  </Tab>
</Tabs>`}
          >
            <Tabs defaultValue="one">
              <Tab label="Tab One" value="one">
                <p className="text-neutral-700 dark:text-neutral-300">
                  Content for Tab One. This is the default active tab.
                </p>
              </Tab>
              <Tab label="Tab Two" value="two">
                <p className="text-neutral-700 dark:text-neutral-300">
                  Content for Tab Two. Click on "Tab Two" to see this content.
                </p>
              </Tab>
              <Tab label="Disabled" value="disabled" disabled>
                <p className="text-neutral-700 dark:text-neutral-300">
                  This content cannot be accessed because the tab is disabled.
                </p>
              </Tab>
            </Tabs>
          </ComponentExample>

          <ComponentExample
            title="Vertical Tabs"
            description="Tabs can be oriented vertically for specialized layouts or when there's more horizontal space available."
            code={`<Tabs defaultValue="documents" orientation="vertical">
  <Tab label="Documents" value="documents" icon={<FileText />}>
    <p>Documents content</p>
  </Tab>
  <Tab label="Images" value="images" icon={<Image />}>
    <p>Images content</p>
  </Tab>
  <Tab label="Analytics" value="analytics" icon={<BarChart2 />}>
    <p>Analytics content</p>
  </Tab>
</Tabs>`}
          >
            <Tabs defaultValue="documents" orientation="vertical">
              <Tab label="Documents" value="documents" icon={<FileText />}>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Documents</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This tab contains document management features. You can
                    view, upload, and organize your documents here.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-md flex items-center">
                      <FileText className="mr-3 text-neutral-500" size={20} />
                      <div>
                        <div className="font-medium">
                          Annual Report 2024.pdf
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          2.4 MB • Updated 2 days ago
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-md flex items-center">
                      <FileText className="mr-3 text-neutral-500" size={20} />
                      <div>
                        <div className="font-medium">Project Proposal.docx</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          1.2 MB • Updated 1 week ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Images" value="images" icon={<Image />}>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Images</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This tab contains image management features. You can view,
                    upload, and organize your images here.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-md flex items-center justify-center">
                      <Image
                        className="text-neutral-400 dark:text-neutral-500"
                        size={32}
                      />
                    </div>
                    <div className="aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-md flex items-center justify-center">
                      <Image
                        className="text-neutral-400 dark:text-neutral-500"
                        size={32}
                      />
                    </div>
                    <div className="aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-md flex items-center justify-center">
                      <Image
                        className="text-neutral-400 dark:text-neutral-500"
                        size={32}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Analytics" value="analytics" icon={<BarChart2 />}>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Analytics</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    This tab contains analytics features. You can view reports
                    and data visualizations here.
                  </p>
                  <div className="h-40 bg-neutral-100 dark:bg-neutral-800 rounded-md flex items-center justify-center">
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Charts and analytics would go here
                    </span>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="Controlled Tabs"
          description="Tabs can be controlled externally by managing the active tab value with state."
        >
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            For more complex use cases, you can control the tabs component
            externally by providing a <code>value</code> prop and an{" "}
            <code>onChange</code> handler. This is useful when you need to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-600 dark:text-neutral-300 mb-6">
            <li>Programmatically change the active tab</li>
            <li>Sync the tab state with other parts of your application</li>
            <li>Perform validation or side effects when tabs change</li>
            <li>Persist the active tab across page refreshes</li>
          </ul>
        </ComponentSection>

        <ComponentSection
          title="API Reference"
          description="Detailed information about the Tabs component props and usage."
        >
          <h3 className="text-xl font-medium mb-4">Tabs Component</h3>
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description: "Tab components to be rendered.",
              },
              {
                name: "defaultValue",
                type: "string",
                description: "Default selected tab value (uncontrolled).",
              },
              {
                name: "value",
                type: "string",
                description: "Currently selected tab value (controlled).",
              },
              {
                name: "onChange",
                type: "(value: string) => void",
                description: "Callback when tab changes.",
              },
              {
                name: "orientation",
                type: "'horizontal' | 'vertical'",
                defaultValue: "'horizontal'",
                description: "Orientation of the tabs.",
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for tabs container.",
              },
              {
                name: "panelClassName",
                type: "string",
                description: "Additional CSS classes for tab panel container.",
              },
            ]}
          />

          <h3 className="text-xl font-medium my-4">Tab Component</h3>
          <PropTable
            props={[
              {
                name: "label",
                type: "string",
                description: "The label displayed for the tab.",
              },
              {
                name: "value",
                type: "string",
                description: "Unique identifier for the tab.",
              },
              {
                name: "icon",
                type: "React.ReactElement",
                description: "Optional icon to display with the tab label.",
              },
              {
                name: "disabled",
                type: "boolean",
                defaultValue: "false",
                description: "Whether the tab is disabled.",
              },
              {
                name: "children",
                type: "React.ReactNode",
                description:
                  "Content to be displayed when the tab is selected.",
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Accessibility"
          description="Accessibility considerations and compliance checklist for the Tabs component."
        >
          <AccessibilityChecklist
            checks={[
              {
                category: "Keyboard Navigation",
                items: [
                  {
                    check: "Tab key navigates to the tabs component",
                    status: "pass",
                  },
                  {
                    check: "Arrow keys navigate between tabs",
                    status: "pass",
                    notes:
                      "Left/Right for horizontal tabs, Up/Down for vertical tabs",
                  },
                  {
                    check: "Enter or Space activates the focused tab",
                    status: "pass",
                  },
                  {
                    check: "Home/End keys navigate to first/last tab",
                    status: "pass",
                  },
                ],
              },
              {
                category: "ARIA Attributes",
                items: [
                  {
                    check: "role='tablist' on the tabs container",
                    status: "pass",
                  },
                  {
                    check: "role='tab' on individual tab buttons",
                    status: "pass",
                  },
                  {
                    check: "role='tabpanel' on content panels",
                    status: "pass",
                  },
                  {
                    check: "aria-selected reflects current tab state",
                    status: "pass",
                  },
                  {
                    check: "aria-controls associates tabs with their panels",
                    status: "pass",
                  },
                  {
                    check: "aria-labelledby associates panels with their tabs",
                    status: "pass",
                  },
                  {
                    check: "aria-orientation reflects tab layout",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Focus Management",
                items: [
                  {
                    check: "Focus is visible and clear for keyboard users",
                    status: "pass",
                  },
                  {
                    check: "Tab indices are properly managed",
                    status: "pass",
                    notes:
                      "Active tab is focusable (tabindex=0), inactive tabs can receive focus with arrow keys (tabindex=-1)",
                  },
                ],
              },
              {
                category: "Color & Contrast",
                items: [
                  {
                    check: "Sufficient contrast for text against backgrounds",
                    status: "pass",
                    notes: "Meets WCAG AA guidelines with 4.5:1 contrast ratio",
                  },
                  {
                    check: "Active state indicated by more than just color",
                    status: "pass",
                    notes: "Uses border and font weight in addition to color",
                  },
                ],
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Best Practices"
          description="Guidelines for using the Tabs component effectively."
        >
          <DosDonts
            dos={[
              "Use short, descriptive labels for tabs",
              "Order tabs in a logical sequence",
              "Group related content within each tab",
              "Use consistent tab patterns throughout your application",
              "Consider using icons alongside text for better recognition",
              "Indicate the active tab clearly",
            ]}
            donts={[
              "Don't use tabs for content that needs to be compared side by side",
              "Don't use tabs for sequential steps (use a wizard or stepper instead)",
              "Don't hide critical information behind tabs",
              "Don't use more than 7 tabs in a single group",
              "Don't use vague or similar labels that could confuse users",
              "Don't change tab order or content unexpectedly",
            ]}
          />
        </ComponentSection>
      </ComponentDoc>
    </div>
  );
};

export default TabsPage;
