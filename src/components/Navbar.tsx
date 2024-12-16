import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/languages" className="hover:text-primary transition-colors">
              Languages
            </Link>
            <Link to="/roadmap" className="hover:text-primary transition-colors">
              Roadmap
            </Link>
            <Link to="/resources" className="hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
              toast({
                title: `Switched to ${newTheme} mode`,
                duration: 1500,
              });
            }}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;