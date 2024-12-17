import { Card } from "@/components/ui/card";

const roadmapTiles = [
  {
    title: "Frontend Development",
    description: "Master modern web interfaces with React and related technologies"
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications and APIs"
  },
  {
    title: "Mobile Development",
    description: "Create cross-platform mobile apps using React Native"
  },
  {
    title: "DevOps",
    description: "Learn deployment, CI/CD, and cloud infrastructure"
  },
  {
    title: "Data Science",
    description: "Analyze data and build machine learning models"
  },
  {
    title: "Blockchain",
    description: "Develop decentralized applications and smart contracts"
  },
  {
    title: "Cloud Computing",
    description: "Master AWS, Azure, and cloud architecture"
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and networks from security threats"
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces"
  },
  {
    title: "Game Development",
    description: "Build engaging games using modern engines"
  },
  {
    title: "AI/ML Engineering",
    description: "Develop intelligent systems and algorithms"
  },
  {
    title: "Database Management",
    description: "Master SQL, NoSQL, and database architecture"
  },
  {
    title: "System Design",
    description: "Design scalable and efficient software systems"
  },
  {
    title: "Quality Assurance",
    description: "Ensure software quality through testing"
  },
  {
    title: "Network Engineering",
    description: "Build and maintain computer networks"
  },
  {
    title: "AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences"
  },
  {
    title: "IoT Development",
    description: "Build connected devices and IoT solutions"
  },
  {
    title: "Technical Writing",
    description: "Create clear and effective technical documentation"
  },
  {
    title: "Data Engineering",
    description: "Build and maintain data processing systems"
  },
  {
    title: "Embedded Systems",
    description: "Develop software for hardware devices"
  }
];

const Roadmap = () => {
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