
import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, Menu } from "lucide-react";

// Context for sidebar state
type SidebarContextType = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Provider component
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  defaultExpanded = true,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // On mobile, sidebar should start collapsed
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(defaultExpanded);
      }
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [defaultExpanded]);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Sidebar component
interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const { expanded } = useSidebar();

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col",
        "border-r border-neutral-200 dark:border-neutral-700",
        "bg-white dark:bg-neutral-900",
        "transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      {children}
    </aside>
  );
};

// Sidebar Header
interface SidebarHeaderProps {
  children?: React.ReactNode;
  logo?: React.ReactNode;
  title?: string;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  logo,
  title,
}) => {
  const { expanded } = useSidebar();

  return (
    <div className="h-16 flex items-center gap-2 px-4 border-b border-neutral-200 dark:border-neutral-700">
      {children || (
        <>
          {logo && <div className="flex-shrink-0">{logo}</div>}
          {expanded && title && (
            <div className="font-semibold text-lg truncate">{title}</div>
          )}
        </>
      )}
    </div>
  );
};

// Sidebar Content
interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex-1 py-4 overflow-y-auto scrollbar-thin",
        className
      )}
    >
      {children}
    </div>
  );
};

// Sidebar Footer
interface SidebarFooterProps {
  children?: React.ReactNode;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children }) => {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-700 py-3 px-3">
      {children || (
        <SidebarCollapseButton />
      )}
    </div>
  );
};

// Sidebar Collapse Button
interface SidebarCollapseButtonProps {
  className?: string;
}

export const SidebarCollapseButton: React.FC<SidebarCollapseButtonProps> = ({
  className,
}) => {
  const { expanded, setExpanded } = useSidebar();

  return (
    <button
      aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      className={cn(
        "p-2 rounded-md w-full flex items-center justify-center",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "text-neutral-500 dark:text-neutral-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <ChevronLeft
        className={cn(
          "h-5 w-5 transition-transform",
          !expanded && "rotate-180"
        )}
      />
      {expanded && <span className="ml-2">Collapse</span>}
    </button>
  );
};

// Sidebar Trigger (for mobile)
interface SidebarTriggerProps {
  className?: string;
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  className,
}) => {
  const { expanded, setExpanded } = useSidebar();

  return (
    <button
      aria-label={expanded ? "Close sidebar" : "Open sidebar"}
      className={cn(
        "md:hidden fixed top-4 left-4 z-50 p-2 rounded-md",
        "bg-white dark:bg-neutral-900 shadow-md",
        "border border-neutral-200 dark:border-neutral-700",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <Menu className="h-5 w-5" />
    </button>
  );
};

// Sidebar Section
interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  className,
}) => {
  const { expanded } = useSidebar();

  return (
    <div className={cn("mb-4", className)}>
      {title && expanded && (
        <h3 className="px-4 mb-1 text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
};

// Sidebar Nav Item
interface SidebarNavItemProps {
  icon?: React.ReactElement;
  title: string;
  active?: boolean;
  disabled?: boolean;
  badge?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  title,
  active = false,
  disabled = false,
  badge,
  onClick,
  href,
}) => {
  const { expanded } = useSidebar();
  
  const content = (
    <>
      {icon && (
        <span className="mr-3 flex-shrink-0">
          {React.cloneElement(icon, { size: 20 })}
        </span>
      )}
      {expanded && (
        <span className="truncate flex-1">{title}</span>
      )}
      {expanded && badge && <span>{badge}</span>}
    </>
  );

  const baseClasses = cn(
    "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    expanded ? "mx-3 justify-start" : "mx-auto justify-center",
    active && "bg-primary text-primary-foreground",
    !active && "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300",
    disabled && "opacity-50 pointer-events-none"
  );

  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
    >
      {content}
    </button>
  );
};
