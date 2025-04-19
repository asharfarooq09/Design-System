import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  id?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const itemId =
    id ||
    `accordion-item-${
      crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)
    }`;
  const contentId = `${itemId}-content`;
  const headerId = `${itemId}-header`;

  return (
    <div
      className={cn(
        "border-b border-neutral-200 dark:border-neutral-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <h3>
        <button
          type="button"
          id={headerId}
          className={cn(
            "flex w-full items-center justify-between px-6 py-4 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors",
            disabled
              ? "cursor-not-allowed text-neutral-400 dark:text-neutral-600"
              : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
          )}
          onClick={() => {
            if (!disabled) setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-disabled={disabled}
          disabled={disabled}
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-neutral-500 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "animate-accordion-down" : "animate-accordion-up h-0"
        )}
      >
        {isOpen && <div className="px-6 py-3">{children}</div>}
      </div>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "border border-neutral-200 rounded-lg overflow-hidden dark:border-neutral-700",
        className
      )}
    >
      {children}
    </div>
  );
};
