
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import TechStackSection from '../components/TechStack';
import ProjectsSection from '../components/Projects';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Register console error handler to catch any Three.js errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Application error:", event.message);
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
