import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const AboutCard = ({ title, role, period, description, img }) => {
  return (
    <div className="glass p-6 rounded-xl card-hover h-full">
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

const TestimonialBanner = () => {
  return (
    <>
      {/* This style tag defines the custom animation. */}
      <style>
        {`
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <div className="my-16 relative group">
        {/* This is the animated gradient border/glow */}
        <div
          className="absolute -inset-2 rounded-lg blur-xl opacity-50 group-hover:blur-3xl group-hover:opacity-70 transition-all duration-500"
          style={{
            background: 'linear-gradient(270deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
            backgroundSize: '400% 400%',
            animation: 'gradient-move 8s ease infinite',
            zIndex: 0,
          }}
        ></div>

        {/* This is the main content box on top */}
        {/* FIX: Added border and backdrop-blur for a better glass effect */}
        <div className="relative glass p-8 rounded-xl z-10 border border-white/10 backdrop-blur-md">
          {/* FIX: Reverted text to be italic and centered */}
          <blockquote className="text-center italic text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
            "Shaun was an excellent addition to our team during his internship with us. He was diligent, a self-starter, willing to learn, implement new things, and accountable for his commitments. He exhibited very good technical skills, a can-do attitude, and delivered great results."
          </blockquote>
          <footer className="text-right">
            <p className="font-semibold text-white">Ravishankar Rajendran</p>
            <p className="text-sm text-gray-400">Engineering Platforms Lead, NatWest Group</p>
          </footer>
        </div>
      </div>
    </>
  );
};

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth < 1280);
      setIsTablet(window.innerWidth < 1536);
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  return (
    <section id="about" className="section py-20">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I build cool Full Stack stuff on the web 🌐 and mobile 📱 — whether it's a slick website or a handy app.
              I also manage the DevOps ⚙️, making sure everything runs smoothly behind the scenes.
              From planning and architecture to deployment and monitoring, I enjoy taking ownership of the entire lifecycle ♻️.
            </p>
            <p className="text-lg text-gray-300">
              I'm always up for learning new tech 🚀 and trying out different ways to make development easier and more fun 🎉.
            </p>
          </div>

          <div className="glass p-6 rounded-xl flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-neon-orange/20 rounded-lg flex items-center justify-start">
              {!isMobile && (
                <div className='absolute h-[850px] w-[1200px] scale-50 z-10 -bottom-[199px]'
                  style={{ left: `calc(${!isTablet ? -150 : -200}px - ${Math.pow((1920 - size.width), 0.71)}px)` }}>
                  <Spline scene="https://prod.spline.design/HvYtuOEtOFskFW9l/scene.splinecode" />
                </div>
              )}
              <p
                className={`text-2xl font-bold gradient-text py-10 ${isMobile ? 'text-center px-14' : 'text-left pl-14'}`}
                style={{
                  width: !isMobile ? `calc(90% - ${1536 - size.width}px)` : '100%'
                }}
              >
                "Building one app at a time"
              </p>
            </div>
          </div>
        </div>

        <TestimonialBanner />

        <h3 className="text-2xl font-semibold mb-6 tech-gradient-text">Experience & Activities</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AboutCard
            title="NatWest Group"
            role="Software Engineer Intern"
            period="June 2025 - Present"
            description="Architected & engineered an AI-driven multi-agent assistant using LangGraph to automate internal platform support services. Eliminated over 60% of manual developer support tasks by automating workflows involving GitLab CI/CD, Jira project configurations, Confluence provisioning, and internal access management. Cut average ticket resolution time from 2+ hours to under 1 minute by introducing intelligent, prompt-based request handling, significantly enhancing engineering velocity. Delivered a fully responsive React-based interface enabling seamless prompt submissions, replacing traditional ticketing processes."
            img="/about/natwest.png"
          />

          <AboutCard
            title="SSN AI Club & IEEE Power and Energy Society"
            role="Webmaster"
            period="2024 - Present"
            description="Developed the official websites of both societies from scratch, tailored to the unique identity and needs of each organization. Responsible for the full web development lifecycle, from design and front-end implementation to deployment and maintenance. Ensured the sites are responsive, visually engaging, and easy to navigate across all devices. Regularly update content to reflect ongoing events and initiatives, and collaborate with team leads to keep the sites aligned with each society's goals and communications."
            img="/about/IEEE PES.png"
          />

          <AboutCard
            title="SSN ACM Student Chapter"
            role="Technical Core Committee Member"
            period="May 2024 - Present"
            description="Led and organized multiple technical events, including flagship competitions and coding challenges with 200+ participants. Played a key role in developing and curating content, including designing problem statements for hackathons and quizzes. Coordinated with team members to ensure smooth execution, timely communication, and an engaging experience. Supported initiatives fostering a strong technical community and enhancing students' coding and problem-solving skills."
            img="/about/acm.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;