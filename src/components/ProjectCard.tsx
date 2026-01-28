interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  index: number;
}

const ProjectCard = ({ title, category, description, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`card-synthwave rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 ${
        isEven ? "" : "md:translate-y-12"
      }`}
    >
      {/* Placeholder for project image */}
      <div className="aspect-video rounded-lg bg-muted mb-6 overflow-hidden relative group">
        <div className="absolute inset-0 synthwave-grid opacity-30 group-hover:animate-grid-scroll" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-display text-secondary uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold group cursor-pointer">
        <span>View Case Study</span>
        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
      </div>
    </div>
  );
};

export default ProjectCard;
