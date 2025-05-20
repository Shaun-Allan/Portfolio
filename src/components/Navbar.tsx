import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log("Scrolled");
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold gradient-text">Shaun Allan</a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-neon-purple transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-neon-purple transition-colors">About</a>
          <a href="#tech" className="text-white hover:text-neon-purple transition-colors">Tech Stack</a>
          <a href="#projects" className="text-white hover:text-neon-purple transition-colors">Projects</a>
          <a href="#contact" className="text-white hover:text-neon-purple transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;