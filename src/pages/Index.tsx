import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/design-system/theme-toggle";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Code,
  Component,
  ExternalLink,
  Palette,
} from "lucide-react";

const ComponentCard = ({
  title,
  icon,
  description,
  href,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "block p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg",
        "hover:shadow-md dark:hover:shadow-neutral-900/50 transition-all",
        "hover:border-primary/20 dark:hover:border-primary/20",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-md text-primary">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </Link>
  );
};

const Index = () => {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white">
              <Component size={20} />
            </div>
            <h1 className="text-xl font-bold">Design System</h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              <Code size={16} />
              <span className="hidden md:inline">GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/5 to-neutral-50 dark:from-primary/10 dark:to-neutral-950 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Enterprise-grade Design System
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            A comprehensive collection of accessible, responsive, and
            customizable components for building modern web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#components"
              className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow"
            >
              Explore Components
            </a>
            <a
              href="/docs/color-system"
              className="px-6 py-3 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium transition-colors shadow-sm hover:shadow"
            >
              Color System
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900 border-t border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Comprehensive Color System
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Accessible, themeable color tokens with semantic meaning and
                proper contrast ratios.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Component className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Flexible Components
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Highly customizable components designed for reusability and
                adaptability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tertiary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="text-tertiary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Type-Safe APIs</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Fully typed with TypeScript for better developer experience and
                fewer bugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">Components</h2>
            <button
              onClick={() => setShowComponents(!showComponents)}
              className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {showComponents ? "Hide" : "Show"} Components
              <ChevronDown
                className={cn(
                  "transition-transform",
                  showComponents ? "rotate-180" : ""
                )}
                size={16}
              />
            </button>
          </div>

          {showComponents && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              <ComponentCard
                title="Color System"
                icon={<Palette size={18} />}
                description="A comprehensive token-based color system with primary, secondary, tertiary, and semantic colors."
                href="/docs/color-system"
              />

              <ComponentCard
                title="Accordion"
                icon={<ChevronDown size={18} />}
                description="A vertically stacked set of interactive headings that each reveal a section of content."
                href="/docs/accordion"
              />

              <ComponentCard
                title="Badges"
                icon={<ExternalLink size={18} />}
                description="Compact visual indicators for statuses, categories, or additional information."
                href="/docs/badge"
              />

              <ComponentCard
                title="Sidebar Navigation"
                icon={<Component size={18} />}
                description="A collapsible sidebar component for primary navigation in applications."
                href="/docs/sidebar"
              />

              <ComponentCard
                title="Tabs"
                icon={<Component size={18} />}
                description="A set of layered sections of content that display one panel at a time."
                href="/docs/tabs"
              />
            </div>
          )}
        </div>
      </section>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white">
                <Component size={20} />
              </div>
              <h2 className="text-xl font-bold"> Design System</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a
                href="/docs/color-system"
                className="hover:text-primary transition-colors"
              >
                Documentation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                License
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} ChromaFlow Design System. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
