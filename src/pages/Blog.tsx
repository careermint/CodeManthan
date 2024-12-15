import { MessageSquare, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogs = [
  {
    title: "Getting Started with React",
    author: "John Doe",
    date: "2024-03-15",
    summary: "Learn the basics of React and build your first component",
    link: "https://example.com/react-basics",
  },
  {
    title: "Understanding TypeScript",
    author: "Jane Smith",
    date: "2024-03-14",
    summary: "A comprehensive guide to TypeScript features and best practices",
    link: "https://example.com/typescript-guide",
  },
  {
    title: "Modern CSS Techniques",
    author: "Mike Johnson",
    date: "2024-03-13",
    summary: "Explore the latest CSS features and how to use them effectively",
    link: "https://example.com/css-techniques",
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Tech Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {blog.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {blog.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{blog.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">By {blog.author}</span>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Read More
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;