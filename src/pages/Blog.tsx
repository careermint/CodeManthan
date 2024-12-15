import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React in 2024",
      date: "March 15, 2024",
      description: "A comprehensive guide to start building modern web applications with React",
      readTime: "5 min read",
    },
    {
      title: "Understanding TypeScript for Beginners",
      date: "March 12, 2024",
      description: "Learn the basics of TypeScript and how it improves your JavaScript code",
      readTime: "7 min read",
    },
    {
      title: "The Future of Web Development",
      date: "March 10, 2024",
      description: "Exploring upcoming trends and technologies in web development",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Tech Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Stay updated with the latest in technology and programming.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.title} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CalendarDays className="w-4 h-4" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="mt-2">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-purple-600">Read More →</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;