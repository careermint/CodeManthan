import NewsletterForm from "./NewsletterForm";

interface RoadmapContentTemplateProps {
  title: string;
}

const RoadmapContentTemplate = ({ title }: RoadmapContentTemplateProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        {title}
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground text-center mb-12">
          Content for {title} coming soon...
        </p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default RoadmapContentTemplate;