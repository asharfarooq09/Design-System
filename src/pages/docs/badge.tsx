import React from "react";
import {
  ComponentDoc,
  ComponentSection,
  ComponentExample,
  PropTable,
  AccessibilityChecklist,
  DosDonts,
} from "@/components/storybook/component-doc";
import { Badge } from "@/components/design-system/badge/badge";
import ThemeToggle from "@/components/design-system/theme-toggle";
import {
  Check,
  Info,
  AlertTriangle,
  AlertCircle,
  Star,
  Clock,
  User,
  MessageSquare,
} from "lucide-react";

const BadgePage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <ComponentDoc
        title="Badge"
        description="Compact visual indicators that highlight status, categories, or additional information."
      >
        <ComponentSection
          title="Overview"
          description="The Badge component is used to highlight information such as statuses, counts, or categories. They are compact, visually distinct elements that help organize and call attention to specific information."
        >
          <ComponentExample
            title="Basic Badges"
            description="Badges in different variants to match your application's semantic needs."
            code={`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="tertiary">Tertiary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection title="Variants">
          <ComponentExample
            title="Outline Badges"
            description="Badges with an outline style for a more subtle appearance."
            code={`<Badge variant="outline">Outline</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Badge Sizes"
            description="Badges are available in three sizes: small, medium (default), and large."
            code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
          >
            <div className="flex flex-wrap gap-2 items-center">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Badges with Icons"
            description="Badges can include icons to provide additional context."
            code={`<Badge icon={<Check />}>Completed</Badge>
<Badge variant="info" icon={<Info />}>Information</Badge>
<Badge variant="warning" icon={<AlertTriangle />}>Warning</Badge>
<Badge variant="error" icon={<AlertCircle />}>Error</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Check size={16} />}>Completed</Badge>
              <Badge variant="info" icon={<Info size={16} />}>
                Information
              </Badge>
              <Badge variant="warning" icon={<AlertTriangle size={16} />}>
                Warning
              </Badge>
              <Badge variant="error" icon={<AlertCircle size={16} />}>
                Error
              </Badge>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Removable Badges"
            description="Badges can be removable with a built-in close button."
            code={`<Badge removable onRemove={() => console.log('Badge removed')}>Removable</Badge>
<Badge variant="primary" removable onRemove={() => console.log('Badge removed')}>Primary</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge removable onRemove={() => console.log("Badge removed")}>
                Removable
              </Badge>
              <Badge
                variant="primary"
                removable
                onRemove={() => console.log("Badge removed")}
              >
                Primary
              </Badge>
              <Badge
                variant="success"
                removable
                onRemove={() => console.log("Badge removed")}
              >
                Success
              </Badge>
            </div>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="Use Cases"
          description="Common applications of the Badge component in interfaces."
        >
          <ComponentExample
            title="Status Indicators"
            description="Use badges to show the status of items or processes."
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="success" icon={<Check size={16} />}>
                  Completed
                </Badge>
                <span className="text-sm">Task completed successfully</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning" icon={<Clock size={16} />}>
                  Pending
                </Badge>
                <span className="text-sm">Waiting for approval</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="error" icon={<AlertCircle size={16} />}>
                  Failed
                </Badge>
                <span className="text-sm">Process failed to complete</span>
              </div>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Categories & Tags"
            description="Use badges to categorize content or show tags."
          >
            <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <h3 className="font-medium mb-2">Enterprise Security Platform</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                A comprehensive solution for enterprise-level security
                management.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Security</Badge>
                <Badge variant="secondary">Enterprise</Badge>
                <Badge variant="info">Cloud</Badge>
                <Badge variant="tertiary">Analytics</Badge>
              </div>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Counter Badges"
            description="Use badges to show counts or metrics."
          >
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Messages</span>
                <Badge variant="primary" size="sm">
                  24
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Notifications</span>
                <Badge variant="error" size="sm">
                  5
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Updates</span>
                <Badge variant="info" size="sm">
                  12
                </Badge>
              </div>
            </div>
          </ComponentExample>

          <ComponentExample
            title="Integration with Other Components"
            description="Badges can be integrated with other UI components."
          >
            <div className="flex flex-col gap-4">
              <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <User size={16} />
                    <span>User Profile</span>
                  </h3>
                  <Badge variant="success" size="sm">
                    Online
                  </Badge>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Last active: Just now
                </p>
              </div>

              <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>Customer Feedback</span>
                  </h3>
                  <Badge variant="warning" size="sm">
                    Needs Review
                  </Badge>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Received: Today at 10:45 AM
                </p>
              </div>
            </div>
          </ComponentExample>
        </ComponentSection>

        <ComponentSection
          title="API Reference"
          description="Detailed information about the Badge component props and usage."
        >
          <PropTable
            props={[
              {
                name: "children",
                type: "React.ReactNode",
                description: "The label text of the badge.",
              },
              {
                name: "icon",
                type: "React.ReactElement",
                description: "Optional icon to display before the badge text.",
              },
              {
                name: "size",
                type: "'sm' | 'md' | 'lg'",
                defaultValue: "'md'",
                description: "Size of the badge.",
              },
              {
                name: "variant",
                type: "'default' | 'outline' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error'",
                defaultValue: "'default'",
                description: "Visual style of the badge.",
              },
              {
                name: "removable",
                type: "boolean",
                defaultValue: "false",
                description:
                  "Whether the badge can be removed with a close button.",
              },
              {
                name: "onRemove",
                type: "() => void",
                description:
                  "Function called when the remove button is clicked.",
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes to apply to the badge.",
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Accessibility"
          description="Accessibility considerations and compliance checklist for the Badge component."
        >
          <AccessibilityChecklist
            checks={[
              {
                category: "Keyboard Interaction",
                items: [
                  {
                    check:
                      "Removable badges have keyboard-accessible close buttons",
                    status: "pass",
                  },
                  {
                    check: "Close buttons are properly focusable",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Screen Readers",
                items: [
                  {
                    check: "Badge close buttons have appropriate ARIA labels",
                    status: "pass",
                    notes: "Using aria-label='Remove' for close buttons",
                  },
                  {
                    check: "Icons have proper text alternatives",
                    status: "pass",
                  },
                ],
              },
              {
                category: "Visual Design",
                items: [
                  {
                    check:
                      "Color is not the only means of conveying information",
                    status: "pass",
                    notes: "Badge text and icons also convey meaning",
                  },
                  {
                    check: "Sufficient color contrast for text",
                    status: "pass",
                    notes: "Minimum 4.5:1 contrast ratio for all badge text",
                  },
                  {
                    check: "Interactive elements have clear focus states",
                    status: "pass",
                  },
                ],
              },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          title="Best Practices"
          description="Guidelines for using the Badge component effectively."
        >
          <DosDonts
            dos={[
              "Keep badge text short and concise",
              "Use appropriate semantic colors to convey meaning (e.g., success, error)",
              "Use badges consistently across the interface",
              "Consider using icons to reinforce meaning",
              "Ensure badges have enough spacing when placed near other elements",
            ]}
            donts={[
              "Don't overuse badges as they can create visual noise",
              "Don't use badges for primary actions or navigation",
              "Don't use long text in badges; they should be concise",
              "Don't rely solely on color to convey meaning",
              "Don't place too many badges adjacent to each other",
            ]}
          />
        </ComponentSection>
      </ComponentDoc>
    </div>
  );
};

export default BadgePage;
