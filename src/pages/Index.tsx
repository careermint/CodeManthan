import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Code, BookOpen, Brain, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import NewsletterForm from "@/components/NewsletterForm";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Roadmaps to Learn Tech",
      description: "Follow structured learning paths to master various technologies",
      link: "/roadmap",
      delay: "delay-[200ms]"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Resources for Interview Prep",
      description: "Comprehensive materials to ace your tech interviews",
      link: "/resources",
      delay: "delay-[400ms]"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Latest Tech Blogs",
      description: "Stay updated with the latest in technology",
      link: "/blog",
      delay: "delay-[600ms]"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Learn through hands-on coding and real-world projects",
      link: "/languages",
      delay: "delay-[800ms]"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent/20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Unlock Your Potential in Tech
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-[200ms]">
            Master programming languages, follow structured roadmaps, and prepare for your dream tech career with our comprehensive resources.
          </p>
          <div className="space-x-4 animate-fade-in delay-[400ms]">
            <Button 
              size="lg" 
              className="hover-scale bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all duration-300"
              asChild
            >
              <Link to="/languages">Get Started</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-scale backdrop-blur-sm"
              asChild
            >
              <Link to="/roadmap">Explore Roadmaps</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/5 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Why Choose Codemanthan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className={`group p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in ${feature.delay}`}
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="container px-4 mx-auto max-w-4xl animate-fade-in">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Index;