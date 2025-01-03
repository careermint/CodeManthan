import { Card } from "@/components/ui/card";
import NewsletterForm from "@/components/NewsletterForm";

const FrontendDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
        Frontend Development Roadmap
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">HTML & CSS Fundamentals</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• HTML5 Semantic Elements</li>
            <li>• CSS Box Model</li>
            <li>• Flexbox & Grid</li>
            <li>• Responsive Design</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">JavaScript Essentials</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• ES6+ Features</li>
            <li>• DOM Manipulation</li>
            <li>• Async Programming</li>
            <li>• Modern JS Concepts</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">Frontend Frameworks</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• React.js</li>
            <li>• State Management</li>
            <li>• Routing</li>
            <li>• Component Architecture</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">Development Tools</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Version Control (Git)</li>
            <li>• Package Managers</li>
            <li>• Build Tools</li>
            <li>• Developer Tools</li>
          </ul>
        </Card>
      </div>

      <NewsletterForm />
    </div>
  );
};

export default FrontendDevelopment;