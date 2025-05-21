import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // First make the menu visible but with opacity 0
      setIsVisible(true);
      setIsAnimating(true);
      
      // Force a reflow before changing opacity
      // Small timeout to ensure the initial state is rendered
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    } else if (isVisible) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300); // Match this with the duration in your CSS transition
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        menuOpen || isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="text-2xl font-bold gradient-text">
          Shaun Allan
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-neon-purple transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-neon-purple transition-colors">About</a>
          <a href="#tech" className="text-white hover:text-neon-purple transition-colors">Tech Stack</a>
          <a href="#projects" className="text-white hover:text-neon-purple transition-colors">Projects</a>
          <a href="#contact" className="text-white hover:text-neon-purple transition-colors">Contact</a>
        </div>

        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu with animations */}
      {(isVisible || isAnimating) && (
        <div 
          className={`md:hidden px-6 pb-6 pt-2 flex flex-col space-y-10 h-screen justify-center items-center transition-all duration-300 ease-in-out ${
            !isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-white hover:text-neon-purple transition-colors text-left pl-4 w-full font-bold text-4xl relative bottom-20">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-neon-purple transition-colors text-left pl-4 w-full font-bold text-4xl relative bottom-20">About</a>
          <a href="#tech" onClick={() => setMenuOpen(false)} className="text-white hover:text-neon-purple transition-colors text-left pl-4 w-full font-bold text-4xl relative bottom-20">Tech Stack</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-neon-purple transition-colors text-left pl-4 w-full font-bold text-4xl relative bottom-20">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-neon-purple transition-colors text-left pl-4 w-full font-bold text-4xl relative bottom-20">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;