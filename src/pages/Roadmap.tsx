import { ListTree } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const roadmaps = [
  {
    title: "Web Development",
    description: "Learn front-end and back-end development",
    steps: [
      "HTML, CSS, JavaScript basics",
      "Front-end frameworks (React)",
      "Back-end development (Node.js)",
      "Databases & APIs",
      "Deployment & DevOps",
    ],
  },
  {
    title: "Data Science",
    description: "Master data analysis and machine learning",
    steps: [
      "Python programming",
      "Data analysis with Pandas",
      "Machine learning basics",
      "Deep learning",
      "Big data technologies",
    ],
  },
  {
    title: "Mobile Development",
    description: "Build mobile apps for iOS and Android",
    steps: [
      "Mobile UI/UX design",
      "React Native basics",
      "State management",
      "Native APIs",
      "App deployment",
    ],
  }
];

const Roadmap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Technology Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListTree className="h-5 w-5" />
                {roadmap.title}
              </CardTitle>
              <CardDescription>{roadmap.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                {roadmap.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-sm text-muted-foreground">
                    {step}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;