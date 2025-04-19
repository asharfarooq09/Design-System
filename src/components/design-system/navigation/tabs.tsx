
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TabProps {
  /** The label for the tab */
  label: string;
  /** The value/id of the tab (must be unique) */
  value: string;
  /** Optional icon for the tab */
  icon?: React.ReactElement;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Content of the tab */
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export interface TabsProps {
  /** Array of Tab components */
  children: React.ReactNode;
  /** Default selected tab value */
  defaultValue?: string;
  /** Currently selected tab value (controlled) */
  value?: string;
  /** Callback when tab changes */
  onChange?: (value: string) => void;
  /** Tab orientation */
  orientation?: "horizontal" | "vertical";
  /** Additional classes for tabs container */
  className?: string;
  /** Additional classes for tab panel container */
  panelClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  value: controlledValue,
  onChange,
  orientation = "horizontal",
  className,
  panelClassName,
}) => {
  // Get tab elements
  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child.type as any)?.displayName === "Tab"
  ) as React.ReactElement<TabProps>[];

  // Set initial value if no default
  const initialValue = defaultValue || tabs[0]?.props.value;
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const value = controlledValue !== undefined ? controlledValue : selectedValue;

  // Effect to handle default value changes
  useEffect(() => {
    if (defaultValue && defaultValue !== selectedValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue, selectedValue]);

  const handleTabChange = (newValue: string) => {
    if (!controlledValue) {
      setSelectedValue(newValue);
    }
    onChange?.(newValue);
  };

  // Find the selected tab content
  const selectedTab = tabs.find((tab) => tab.props.value === value);

  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-row" : "flex-col",
        className
      )}
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          "flex",
          orientation === "vertical"
            ? "flex-col border-r border-neutral-200 dark:border-neutral-700 min-w-[200px]"
            : "flex-row border-b border-neutral-200 dark:border-neutral-700"
        )}
      >
        {tabs.map((tab) => {
          const { label, value: tabValue, icon, disabled } = tab.props;
          const isSelected = value === tabValue;

          return (
            <button
              key={tabValue}
              role="tab"
              id={`tab-${tabValue}`}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${tabValue}`}
              tabIndex={isSelected ? 0 : -1}
              disabled={disabled}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                orientation === "vertical"
                  ? "py-3 px-4 justify-start border-l-2"
                  : "py-3 px-4 justify-center border-b-2",
                isSelected
                  ? "border-primary text-primary"
                  : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !disabled && handleTabChange(tabValue)}
            >
              {icon && React.cloneElement(icon, { size: 16 })}
              {label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        className={cn(
          "p-6 focus:outline-none",
          orientation === "vertical" ? "flex-1" : "",
          panelClassName
        )}
        tabIndex={0}
      >
        {selectedTab?.props.children}
      </div>
    </div>
  );
};

// Set display name for Tab component (used for type checking)
Tab.displayName = "Tab";
