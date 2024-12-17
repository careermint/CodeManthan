import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Languages from "./pages/Languages";
import Roadmap from "./pages/Roadmap";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import RoadmapContentTemplate from "./components/RoadmapContentTemplate";
import { roadmapTiles } from "./constants/roadmapData";

const queryClient = new QueryClient();

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
                {roadmapTiles.map((tile) => (
                  <Route
                    key={tile.path}
                    path={tile.path}
                    element={<RoadmapContentTemplate title={tile.title} />}
                  />
                ))}
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;