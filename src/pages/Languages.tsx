import { Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const languages = [
  {
    name: "Python",
    description: "A versatile language known for its simplicity and readability",
    docs: "https://docs.python.org/",
    courses: "https://www.coursera.org/learn/python",
  },
  {
    name: "JavaScript",
    description: "The language of the web, essential for front-end development",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    courses: "https://www.udemy.com/course/javascript-the-complete-guide/",
  },
  {
    name: "Java",
    description: "Popular for enterprise software and Android development",
    docs: "https://docs.oracle.com/en/java/",
    courses: "https://www.codecademy.com/learn/learn-java",
  },
  {
    name: "C++",
    description: "Powerful language for system programming and game development",
    docs: "https://en.cppreference.com/",
    courses: "https://www.edx.org/learn/c-plus-plus",
  },
  {
    name: "Ruby",
    description: "Known for its elegant syntax and web framework Ruby on Rails",
    docs: "https://ruby-doc.org/",
    courses: "https://www.ruby-lang.org/en/documentation/",
  }
];

const Languages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Popular Programming Languages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                {language.name}
              </CardTitle>
              <CardDescription>{language.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a
                  href={language.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  Official Documentation
                </a>
                <a
                  href={language.courses}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  Recommended Courses
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Languages;