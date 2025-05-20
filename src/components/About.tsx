import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const AboutCard = ({ title, role, period, description, img }) => {
  return (
    <div className="glass p-6 rounded-xl card-hover">
      <div className='flex items-center justify-between'>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="mb-4">
            <p className="text-neon-green font-medium">{role}</p>
            <p className="text-sm text-gray-400">{period}</p>
          </div>
        </div>
        <img
          src={img}
          alt={title}
          className="w-32 h-32 object-contain rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on initial render
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run the check initially
    checkMobile();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="section py-20">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I build cool stuff on the web 🌐 and mobile 📱 — whether it's a slick website or a handy app.
              I also manage the DevOps ⚙️, making sure everything runs smoothly behind the scenes.
              From planning and architecture to deployment and monitoring, I enjoy taking ownership of the entire lifecycle.
            </p>
            <p className="text-lg text-gray-300">
              I'm always up for learning new tech 🚀 and trying out different ways to make development easier and more fun 🎉.
            </p>
          </div>

          <div className="glass p-6 rounded-xl flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-neon-orange/20 rounded-lg flex items-center justify-start">
              {!isMobile && (
                <div className='absolute h-[850px] w-[1200px] scale-50 z-10 -left-[150px] -bottom-[199px]'>
                  <Spline scene="https://prod.spline.design/JxoeXWx5ISGWw50d/scene.splinecode" />
                </div>
              )}
              <p className="text-2xl font-bold gradient-text py-10 px-14 text-left">
                "Building one app at a time"
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 tech-gradient-text">Experience & Activities</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            title="NatWest"
            role="Software Engineer Intern"
            period="2025 - Present"
            description="Working on innovative banking solutions, contributing to frontend and backend systems with modern tech stacks. Developing scalable applications and implementing user-friendly interfaces."
            img="/about/natwest.png"
          />

          <AboutCard
            title="SSN AI Club & IEEE Power and Energy Society"
            role="Webmaster"
            period="2024 - Present"
            description="Managing web presence and digital infrastructure for both organizations. Developing and maintaining websites, implementing SEO strategies, and creating engaging digital content."
            img="/about/IEEE PES.png"
          />

          <AboutCard
            title="SSN Coding Club"
            role="Full Stack Core Committee Member"
            period="2024 - Present"
            description="Leading technical workshops, organizing coding competitions, and mentoring junior developers. Contributing to community projects and fostering a culture of collaborative learning."
            img="/about/coding club.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;