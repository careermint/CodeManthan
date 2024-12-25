import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { roadmapTiles } from "./constants/roadmapData";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const Languages = lazy(() => import("./pages/Languages"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FrontendDevelopment = lazy(() => import("./pages/roadmap/FrontendDevelopment"));
const BackendDevelopment = lazy(() => import("./pages/roadmap/BackendDevelopment"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/languages" element={<Languages />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/blog" element={<Blog />} />
                  
                  {/* Language Routes */}
                  <Route path="/languages/:language" element={<RoadmapContentTemplate title="Language Content" />} />
                  
                  {/* Resource Routes */}
                  <Route path="/resources/:resource" element={<RoadmapContentTemplate title="Resource Content" />} />
                  
                  {/* Blog Routes */}
                  <Route path="/blog/:post" element={<RoadmapContentTemplate title="Blog Post" />} />
                  
                  {/* Roadmap Routes */}
                  <Route path="/roadmap/frontend-development" element={<FrontendDevelopment />} />
                  <Route path="/roadmap/backend-development" element={<BackendDevelopment />} />

                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;