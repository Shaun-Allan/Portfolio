import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      requestAnimationFrame(updateScroll);
    };

    const handleScroll = () => requestAnimationFrame(updateScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/70 backdrop-blur-md shadow-md z-[200] overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative rounded-r-full transition-[width] duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Flowing wave */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none animate-wave"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            transform: `translateX(${scrollProgress * 2}px)`,
          }}
        />

        {/* Glow effect */}
        <div className="absolute -top-1 -bottom-1 -left-2 -right-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-sm pointer-events-none animate-pulseGlow" />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
