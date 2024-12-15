import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.mailerlite.com/api/v2/subscribers",
        {
          email: email,
          resubscribe: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY || "",
          },
        }
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
          duration: 3000,
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
      console.error("Newsletter subscription error:", error);
    }
    setIsLoading(false);
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
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;