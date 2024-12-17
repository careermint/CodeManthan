import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Python",
    description: "A versatile language known for its simplicity and readability",
    path: "/languages/python"
  },
  {
    name: "JavaScript",
    description: "The language of the web, essential for front-end development",
    path: "/languages/javascript"
  },
  {
    name: "Java",
    description: "Popular for enterprise software and Android development",
    path: "/languages/java"
  },
  {
    name: "C++",
    description: "Powerful language for system programming and game development",
    path: "/languages/cpp"
  },
  {
    name: "Ruby",
    description: "Known for its elegant syntax and web framework Ruby on Rails",
    path: "/languages/ruby"
  }
];

const Languages = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        Popular Programming Languages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language, index) => (
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
            onClick={() => navigate(language.path)}
          >
            <h3 className="text-lg font-semibold mb-2 text-primary">
              {language.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Languages;