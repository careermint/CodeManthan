import { Card } from "@/components/ui/card";
import { MessageSquare, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Getting Started with React",
    author: "John Doe",
    date: "2024-03-15",
    summary: "Learn the basics of React and build your first component",
    path: "/blog/react-basics",
  },
  {
    title: "Understanding TypeScript",
    author: "Jane Smith",
    date: "2024-03-14",
    summary: "A comprehensive guide to TypeScript features and best practices",
    path: "/blog/typescript-guide",
  },
  {
    title: "Modern CSS Techniques",
    author: "Mike Johnson",
    date: "2024-03-13",
    summary: "Explore the latest CSS features and how to use them effectively",
    path: "/blog/css-techniques",
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Tech Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
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
            onClick={() => navigate(blog.path)}
          >
            <h3 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {blog.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{blog.summary}</p>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>By {blog.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {blog.date}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;