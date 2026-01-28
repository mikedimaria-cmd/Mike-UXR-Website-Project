const SynthwaveSun = () => {
  return (
    <div className="relative w-80 h-40 overflow-hidden">
      {/* Sun gradient circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full gradient-sunset opacity-90" />
      
      {/* Horizontal scan lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-1 bg-background"
          style={{ bottom: `${i * 12 + 10}px` }}
        />
      ))}
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-neon-pink/20 blur-3xl" />
    </div>
  );
};

export default SynthwaveSun;
