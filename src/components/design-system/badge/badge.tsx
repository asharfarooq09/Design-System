
import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeVariant = 
  | "default" 
  | "outline" 
  | "primary" 
  | "secondary" 
  | "tertiary" 
  | "success" 
  | "info" 
  | "warning" 
  | "error";

export interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  size?: BadgeSize;
  variant?: BadgeVariant;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  size = "md",
  variant = "default",
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100",
    outline: "border border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    secondary: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300",
    tertiary: "bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900 dark:text-tertiary-300",
    success: "bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300",
    info: "bg-info-100 text-info-800 dark:bg-info-900 dark:text-info-300",
    warning: "bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300",
    error: "bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-300",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-sm px-2.5 py-0.5 rounded-md",
    lg: "text-base px-3 py-1 rounded-md",
  };

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("mr-1", iconSize[size])}>
          {React.cloneElement(icon, { 
            size: size === "sm" ? 12 : size === "md" ? 16 : 20,
            className: cn("flex-shrink-0")
          })}
        </span>
      )}
      {children}
      {removable && (
        <button
          type="button"
          className={cn(
            "ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset",
            "hover:bg-black/10 dark:hover:bg-white/10",
            "active:bg-black/20 dark:active:bg-white/20",
            size === "sm" ? "p-0.5" : size === "md" ? "p-0.5" : "p-1"
          )}
          onClick={handleRemoveClick}
          aria-label="Remove"
        >
          <X size={size === "sm" ? 10 : size === "md" ? 12 : 14} />
        </button>
      )}
    </span>
  );
};
