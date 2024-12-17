import { Card } from "@/components/ui/card";
import { BookOpen, Award, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    title: "LeetCode",
    category: "Coding Challenges",
    description: "Practice coding problems and prepare for technical interviews",
    path: "/resources/leetcode",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "System Design Primer",
    category: "System Design",
    description: "Learn how to design large-scale systems",
    path: "/resources/system-design",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Cracking the Coding Interview",
    category: "Interview Questions",
    description: "The most popular book for coding interview preparation",
    path: "/resources/interview-prep",
    icon: <Award className="h-5 w-5" />,
  }
];

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Interview Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card
            key={index}
            className={`
              p-6 cursor-pointer
              bg-gradient-to-br from-purple-500/5 to-pink-500/5
              hover:from-purple-500/10 hover:to-pink-500/10
              border border-purple-500/20
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
              animate-fade-in
            `}
            style={{
              animationDelay: `${index * 100}ms`
            }}
            onClick={() => navigate(resource.path)}
          >
            <div className="flex items-center gap-2 mb-2">
              {resource.icon}
              <h3 className="text-lg font-semibold text-primary">{resource.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;