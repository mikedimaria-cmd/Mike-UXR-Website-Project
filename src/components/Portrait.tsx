import portraitImage from "@/assets/portrait.png";

const Portrait = () => {
  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Gradient border container */}
      <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Inner container with image */}
        <div className="relative overflow-hidden rounded-xl bg-background">
          <img
            src={portraitImage}
            alt="Mike DiMaria"
            className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary opacity-60" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-secondary opacity-60" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-secondary opacity-60" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary opacity-60" />
    </div>
  );
};

export default Portrait;
