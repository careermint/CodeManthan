import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
          404
        </h1>
        <div className="relative">
          <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 relative">
            Oops! Page Not Found
          </h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like you've ventured into uncharted territory. Don't worry, even the best explorers get lost sometimes!
        </p>
        <div className="space-y-4">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            <Link to="/">
              Return Home
            </Link>
          </Button>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;