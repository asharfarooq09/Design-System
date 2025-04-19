import React from "react";
import { cn } from "@/lib/utils";

interface ComponentDocProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentDoc: React.FC<ComponentDocProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
      </div>
      {children}
    </div>
  );
};

interface ComponentSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentSection: React.FC<ComponentSectionProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <section className={cn("mb-12", className)}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {description && (
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          {description}
        </p>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
};

interface ComponentExampleProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

export const ComponentExample: React.FC<ComponentExampleProps> = ({
  title,
  description,
  children,
  code,
  className,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      {description && (
        <p className="text-neutral-600 dark:text-neutral-300 mb-3">
          {description}
        </p>
      )}
      <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900">
        {children}
      </div>
      {code && (
        <div className="mt-2">
          <details className="text-sm">
            <summary className="cursor-pointer hover:text-primary py-2">
              View Code
            </summary>
            <pre className="text-xs p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-auto">
              <code>{code}</code>
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

interface PropTableProps {
  props: {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
  }[];
  className?: string;
}

export const PropTable: React.FC<PropTableProps> = ({ props, className }) => {
  return (
    <div className={cn("overflow-auto", className)}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-neutral-200 dark:border-neutral-700">
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Type</th>
            <th className="py-3 px-4 text-left font-semibold">Default Value</th>
            <th className="py-3 px-4 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-neutral-200 dark:border-neutral-700"
            >
              <td className="py-3 px-4 font-mono text-sm">{prop.name}</td>
              <td className="py-3 px-4 font-mono text-sm text-tertiary-600 dark:text-tertiary-400">
                {prop.type}
              </td>
              <td className="py-3 px-4 font-mono text-sm">
                {prop.defaultValue || "-"}
              </td>
              <td className="py-3 px-4 text-sm">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface AccessibilityChecklistProps {
  checks: {
    category: string;
    items: {
      check: string;
      status: "pass" | "fail" | "partial" | "na";
      notes?: string;
    }[];
  }[];
  className?: string;
}

export const AccessibilityChecklist: React.FC<AccessibilityChecklistProps> = ({
  checks,
  className,
}) => {
  const statusIcons = {
    pass: "✅",
    fail: "❌",
    partial: "⚠️",
    na: "➖",
  };

  return (
    <div className={cn("space-y-6", className)}>
      {checks.map((category) => (
        <div key={category.category}>
          <h3 className="text-lg font-medium mb-3">{category.category}</h3>
          <ul className="space-y-2">
            {category.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 flex-shrink-0 mt-0.5" aria-hidden="true">
                  {statusIcons[item.status]}
                </span>
                <div>
                  <div className="font-medium">{item.check}</div>
                  {item.notes && (
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {item.notes}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

interface DosDontsProps {
  dos: string[];
  donts: string[];
  className?: string;
}

export const DosDonts: React.FC<DosDontsProps> = ({
  dos,
  donts,
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      <div className="border border-success-200 dark:border-success-900 rounded-lg overflow-hidden">
        <div className="bg-success-100 dark:bg-success-900/30 px-4 py-2 border-b border-success-200 dark:border-success-900">
          <h3 className="font-semibold text-success-800 dark:text-success-300">
            Do's
          </h3>
        </div>
        <ul className="p-4 space-y-2">
          {dos.map((item, index) => (
            <li key={index} className="flex items-start">
              <span
                className="text-success-600 dark:text-success-400 mr-2 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-error-200 dark:border-error-900 rounded-lg overflow-hidden">
        <div className="bg-error-100 dark:bg-error-900/30 px-4 py-2 border-b border-error-200 dark:border-error-900">
          <h3 className="font-semibold text-error-800 dark:text-error-300">
            Don'ts
          </h3>
        </div>
        <ul className="p-4 space-y-2">
          {donts.map((item, index) => (
            <li key={index} className="flex items-start">
              <span
                className="text-error-600 dark:text-error-400 mr-2 flex-shrink-0"
                aria-hidden="true"
              >
                ✗
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
