import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Video, Globe } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "freeCodeCamp",
      type: "Interactive Course",
      description: "Free coding tutorials and certifications",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      link: "https://www.freecodecamp.org",
    },
    {
      title: "MDN Web Docs",
      type: "Documentation",
      description: "Comprehensive web development documentation",
      icon: <Book className="w-6 h-6 text-purple-500" />,
      link: "https://developer.mozilla.org",
    },
    {
      title: "Traversy Media",
      type: "Video Tutorials",
      description: "Project-based programming tutorials",
      icon: <Video className="w-6 h-6 text-purple-500" />,
      link: "https://www.youtube.com/user/traversymedia",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Learning Resources</h1>
      <p className="text-lg text-gray-600 mb-8">
        Curated collection of the best learning materials to help you master programming.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            key={resource.title}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {resource.icon}
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
                <CardTitle className="mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-purple-600">Visit Resource →</div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;