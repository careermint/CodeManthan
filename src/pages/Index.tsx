import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Code, BookOpen, Brain, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Roadmaps to Learn Tech",
      description: "Follow structured learning paths to master various technologies"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Resources for Interview Prep",
      description: "Comprehensive materials to ace your tech interviews"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Latest Tech Blogs",
      description: "Stay updated with the latest in technology"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Learn through hands-on coding and real-world projects"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            toast({
              title: `Switched to ${theme === "dark" ? "light" : "dark"} mode`,
              duration: 1500
            });
          }}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Unlock Your Potential in Tech
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Master programming languages, follow structured roadmaps, and prepare for your dream tech career with our comprehensive resources.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg" className="hover-scale">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Explore Roadmaps
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Codemanthan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;