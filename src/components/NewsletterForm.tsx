import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the newsletter subscription
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
        duration: 3000,
      });
      setEmail("");
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Subscribe to Our Newsletter</h2>
      <p className="text-muted-foreground text-center">
        Get the latest updates on technology and learning resources
      </p>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
};

export default NewsletterForm;