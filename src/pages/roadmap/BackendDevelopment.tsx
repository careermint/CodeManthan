import { Card } from "@/components/ui/card";
import NewsletterForm from "@/components/NewsletterForm";

const BackendDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
        Backend Development Roadmap
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">Server-Side Languages</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Node.js</li>
            <li>• Python</li>
            <li>• Java</li>
            <li>• Go</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">Databases</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• SQL Databases</li>
            <li>• NoSQL Databases</li>
            <li>• Database Design</li>
            <li>• Query Optimization</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">APIs & Architecture</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• RESTful APIs</li>
            <li>• GraphQL</li>
            <li>• Microservices</li>
            <li>• System Design</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">DevOps & Security</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Authentication</li>
            <li>• Authorization</li>
            <li>• CI/CD</li>
            <li>• Security Best Practices</li>
          </ul>
        </Card>
      </div>

      <NewsletterForm />
    </div>
  );
};

export default BackendDevelopment;