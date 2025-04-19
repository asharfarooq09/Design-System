import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ColorSystemPage from "./pages/docs/color-system";
import AccordionPage from "./pages/docs/accordion";
import BadgePage from "./pages/docs/badge";
import SidebarPage from "./pages/docs/sidebar";
import TabsPage from "./pages/docs/tabs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs/color-system" element={<ColorSystemPage />} />
          <Route path="/docs/accordion" element={<AccordionPage />} />
          <Route path="/docs/badge" element={<BadgePage />} />
          <Route path="/docs/sidebar" element={<SidebarPage />} />
          <Route path="/docs/tabs" element={<TabsPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
