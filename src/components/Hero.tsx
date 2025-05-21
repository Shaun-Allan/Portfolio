
import { useRef, useEffect } from "react";


const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    interface Circle {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      gradient: CanvasGradient;
      rotation: number;
      rotationSpeed: number;
    }
    
    // Gradient colors
    const gradients = [
      ['#B16CEA', '#FF7EB3'],
      ['#FF7EB3', '#FFA26B'],
      ['#FFA26B', '#B16CEA'],
      ['#36DBFF', '#00FFB2'],
      ['#00FFB2', '#36DBFF'],
    ];
    
    // Determine number of circles based on screen width
    const isMobile = window.innerWidth <= 768;
    const numberOfCircles = isMobile ? 15 : 50;
    
    // Create circles with random properties
    const circles: Circle[] = [];
    for (let i = 0; i < numberOfCircles; i++) {
      const radius = Math.random() * 60 + 5;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.01;
      
      // Create gradient
      const gradientIndex = Math.floor(Math.random() * gradients.length);
      const gradient = ctx.createLinearGradient(
        x - radius, y - radius, 
        x + radius, y + radius
      );
      gradient.addColorStop(0, gradients[gradientIndex][0]);
      gradient.addColorStop(1, gradients[gradientIndex][1]);
      
      circles.push({
        x, y, radius, dx, dy, gradient, rotation, rotationSpeed
      });
    }
    
    // Animation function
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update circles
      circles.forEach(circle => {
        ctx.save();
        ctx.translate(circle.x, circle.y);
        ctx.rotate(circle.rotation);
        ctx.beginPath();
        ctx.arc(0, 0, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.gradient;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.restore();
        
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.rotation += circle.rotationSpeed;
        
        // Bounce off edges
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }
        
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', zIndex: 0 }}
    />
  );
};

const HeroSection = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nameEl = nameRef.current;
      if (!nameEl) return;

      const rect = nameEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center of element to cursor
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Apply resistance factor (lower = more resistance)
      const resistance = 0.015;
      const translateX = deltaX * resistance;
      const translateY = deltaY * resistance;

      nameEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const resetTransform = () => {
      const nameEl = nameRef.current;
      if (nameEl) {
        nameEl.style.transform = `translate(0, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section id="home" className="section min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <StarryBackground />
      </div>

      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm{" "}
            <span
              ref={window.innerWidth<768 ? null : nameRef}
              className="inline-block gradient-text transition-transform duration-75 ease-out"
            >
              Shaun Allan
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack{" "}
            <span className="tech-gradient-text">Web</span> &{" "}
            <span className="tech-gradient-text">Mobile</span> Developer |{" "}
            <span className="tech-gradient-text">AI</span> Specialist
          </p>
          <p className="text-lg mb-10 text-gray-400 max-w-2xl">
            Building innovative solutions with cutting-edge technologies.
            Passionate about creating immersive digital experiences that push the boundaries.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity text-white font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-neon-purple/50 transition-colors text-white font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;