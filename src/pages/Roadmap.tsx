import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const roadmapTiles = [
  {
    title: "Frontend Development",
    description: "Master modern web interfaces with React and related technologies",
    path: "/roadmap/frontend-development"
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications and APIs",
    path: "/roadmap/backend-development"
  },
  {
    title: "Mobile Development",
    description: "Create cross-platform mobile apps using React Native",
    path: "/roadmap/mobile-development"
  },
  {
    title: "DevOps",
    description: "Learn deployment, CI/CD, and cloud infrastructure",
    path: "/roadmap/devops"
  },
  {
    title: "Data Science",
    description: "Analyze data and build machine learning models",
    path: "/roadmap/data-science"
  },
  {
    title: "Blockchain",
    description: "Develop decentralized applications and smart contracts",
    path: "/roadmap/blockchain"
  },
  {
    title: "Cloud Computing",
    description: "Master AWS, Azure, and cloud architecture",
    path: "/roadmap/cloud-computing"
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and networks from security threats",
    path: "/roadmap/cybersecurity"
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces",
    path: "/roadmap/ui-ux-design"
  },
  {
    title: "Game Development",
    description: "Build engaging games using modern engines",
    path: "/roadmap/game-development"
  },
  {
    title: "AI/ML Engineering",
    description: "Develop intelligent systems and algorithms",
    path: "/roadmap/ai-ml-engineering"
  },
  {
    title: "Database Management",
    description: "Master SQL, NoSQL, and database architecture",
    path: "/roadmap/database-management"
  },
  {
    title: "System Design",
    description: "Design scalable and efficient software systems",
    path: "/roadmap/system-design"
  },
  {
    title: "Quality Assurance",
    description: "Ensure software quality through testing",
    path: "/roadmap/quality-assurance"
  },
  {
    title: "Network Engineering",
    description: "Build and maintain computer networks",
    path: "/roadmap/network-engineering"
  },
  {
    title: "AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences",
    path: "/roadmap/ar-vr-development"
  },
  {
    title: "IoT Development",
    description: "Build connected devices and IoT solutions",
    path: "/roadmap/iot-development"
  },
  {
    title: "Technical Writing",
    description: "Create clear and effective technical documentation",
    path: "/roadmap/technical-writing"
  },
  {
    title: "Data Engineering",
    description: "Build and maintain data processing systems",
    path: "/roadmap/data-engineering"
  },
  {
    title: "Embedded Systems",
    description: "Develop software for hardware devices",
    path: "/roadmap/embedded-systems"
  }
];

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