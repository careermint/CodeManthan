import { ArrowRight, BookOpen, Map, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Map className="h-6 w-6" />,
      title: "Learning Roadmaps",
      description:
        "Follow structured paths to master different tech stacks and roles.",
      link: "/roadmaps"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Curated Resources",
      description:
        "Access hand-picked tutorials, courses, and documentation for each skill.",
      link: "/resources"
    },
    {
      icon: <Newspaper className="h-6 w-6" />,
      title: "Tech Blog",
      description:
        "Stay updated with the latest trends, tutorials, and tech news.",
      link: "/blog"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              Your Journey in Tech Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Follow structured learning paths, access curated resources, and stay
              updated with the latest in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button size="lg" asChild className="transform transition-transform hover:scale-105">
                <Link to="/roadmaps">
                  Explore Roadmaps <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform transition-transform hover:scale-105">
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;