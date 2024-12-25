import { Card } from "@/components/ui/card";
import NewsletterForm from "@/components/NewsletterForm";

const MobileDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
        Mobile Development Roadmap
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">React Native Fundamentals</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• React Native Components</li>
            <li>• Navigation</li>
            <li>• State Management</li>
            <li>• Native Modules</li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-primary">Mobile UI/UX</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Mobile Design Patterns</li>
            <li>• Responsive Layouts</li>
            <li>• Animations</li>
            <li>• Gestures</li>
          </ul>
        </Card>
      </div>

      <NewsletterForm />
    </div>
  );
};

export default MobileDevelopment;