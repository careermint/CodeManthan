import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const Roadmaps = () => {
  const roadmaps = [
    {
      title: "Frontend Development",
      description: "Learn to build modern web interfaces with HTML, CSS, JavaScript, and popular frameworks",
      icon: <Code className="w-8 h-8 text-purple-500" />,
      path: "/roadmaps/frontend",
    },
    {
      title: "Backend Development",
      description: "Master server-side programming, databases, and API development",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      path: "/roadmaps/backend",
    },
    {
      title: "Data Science",
      description: "Explore data analysis, machine learning, and statistical modeling",
      icon: <LineChart className="w-8 h-8 text-purple-500" />,
      path: "/roadmaps/data-science",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Learning Roadmaps</h1>
      <p className="text-lg text-gray-600 mb-8">
        Choose your learning path and follow our structured guides to master new technologies.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap) => (
          <Link to={roadmap.path} key={roadmap.title}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {roadmap.icon}
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="mt-4">{roadmap.title}</CardTitle>
                <CardDescription>{roadmap.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-purple-600">Start Learning →</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;