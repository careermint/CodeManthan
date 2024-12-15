import { BookOpen, Award, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    title: "LeetCode",
    category: "Coding Challenges",
    description: "Practice coding problems and prepare for technical interviews",
    rating: 4.8,
    link: "https://leetcode.com",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "System Design Primer",
    category: "System Design",
    description: "Learn how to design large-scale systems",
    rating: 4.9,
    link: "https://github.com/donnemartin/system-design-primer",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Cracking the Coding Interview",
    category: "Interview Questions",
    description: "The most popular book for coding interview preparation",
    rating: 4.7,
    link: "https://www.crackingthecodinginterview.com",
    icon: <Award className="h-5 w-5" />,
  }
];

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Interview Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {resource.icon}
                {resource.title}
              </CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rating: {resource.rating}/5</span>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Resource
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;