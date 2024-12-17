import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { roadmapTiles } from "../constants/roadmapData";

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        Technology Roadmaps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmapTiles.map((tile, index) => (
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
            onClick={() => navigate(tile.path)}
          >
            <h3 className="text-lg font-semibold mb-2 text-primary">
              {tile.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {tile.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;