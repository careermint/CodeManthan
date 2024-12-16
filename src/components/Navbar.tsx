import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const navLinks = [
    { to: "/languages", text: "Languages" },
    { to: "/roadmap", text: "Roadmap" },
    { to: "/resources", text: "Resources" },
    { to: "/blog", text: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-2 py-1 text-foreground/80 hover:text-primary transition-all duration-300
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                  after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-500 
                  after:to-pink-500 after:origin-bottom-right after:transition-transform 
                  after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                  hover:translate-y-[-2px]"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-500/10 hover:scale-110 transition-all duration-300"
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                setTheme(newTheme);
                toast({
                  title: `Switched to ${newTheme} mode`,
                  duration: 1500,
                });
              }}
            >
              {theme === "dark" ? 
                <Sun className="h-5 w-5 hover:rotate-90 transition-transform duration-300" /> : 
                <Moon className="h-5 w-5 hover:rotate-90 transition-transform duration-300" />
              }
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="rounded-full hover:bg-purple-500/10 hover:scale-110 transition-all duration-300"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg border-l border-purple-500/20"
                >
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 text-lg hover:text-primary transition-all duration-300
                          hover:bg-purple-500/10 rounded-lg hover:translate-x-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;