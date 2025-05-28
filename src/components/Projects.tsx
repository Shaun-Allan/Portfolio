import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseProjects = [
    {
      title: "aSapRoute",
      description: "A cloud-based mobile application designed to estimate real-time landslide vulnerability by integrating NASA's LHASA 2.0 model with crowdsourced geospatial data. The system forecasts potential landslide events with an average prediction accuracy of 74.56%, helping users make informed decisions during travel. It dynamically analyzes current risk zones and suggests safer alternate routes, enhancing situational awareness and public safety during heavy rainfall or disaster-prone conditions.",
      tags: ["Flutter", "GCP", "Flask", "Python"],
      media: "/projects/aSapRoute.mp4",
      isVideo: true,
      link: "https://github.com/Shaun-Allan/aSapRoute",
      baseRowSpan: 2,
      baseColSpan: 1,
      objectPosition: "center top",
    },
    {
      title: "Invente '24 & Instincts '25",
      description: "Developed and maintained the official websites for the institution's flagship cultural festivals, which served as the central platform for event schedules, registrations, and live updates for over 3,000 participants and attendees.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      media: "/projects/Instincts 25.mp4",
      isVideo: true,
      link: "https://instincts-2025.vercel.app/",
      baseRowSpan: 1,
      baseColSpan: 2,
      objectPosition: "center center",
    },
    {
      title: "Wassup",
      description: "A microservices-based messaging platform supporting one-to-one and group conversations using WebSockets. Built with React Native for the frontend and GoLang for backend services, it features JWT-based authentication, containerized architecture with Docker, and scalable orchestration using Kubernetes. Data is managed using PostgreSQL and MongoDB to optimize real-time performance and persistence.",
      tags: ["WebSockets", "React Native", "GoLang", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
      media: "/projects/Wassup.mp4",
      isVideo: true,
      link: "https://linktr.ee/shaunallan0605",
      baseRowSpan: 2,
      baseColSpan: 1,
      objectPosition: "center top",
    },

    {
      title: "AI DIDI",
      description: "AI-Generated Avatar for Digital Inclusion of Deaf Individuals. This project focuses on a real-time sign language translation system designed to enhance accessibility for Deaf users. It includes a browser extension that automatically translates YouTube videos into Indian Sign Language through avatar-based animations. The system achieves real-time synchronization with an average response time of 0.2495 seconds and maintains high animation accuracy, with a mean squared error of 0.1281 pixels². Applied the mechanism and technology for a patent.",
      tags: ["React JS", "Flask", "Python", "CWASA"],
      media: "/projects/AI DIDI.mp4",
      isVideo: true,
      link: "https://github.com/Shaun-Allan/ISLTranslator",
      baseRowSpan: 1,
      baseColSpan: 1,
      objectPosition: "center top",
    },

    {
      title: "Fusion & Fusion Virtual Machine",
      description: "Fusion involves the design and implementation of an original compiled programming language, inspired by the syntax of Python and Go. Built a custom virtual machine for execution, enabling sandboxed and platform-independent code execution. The compiler achieves high performance with a compilation speed exceeding 1,200 lines of code per second, enabled by optimized parsing and code generation techniques.",
      tags: ["C++"],
      media: "/projects/Fusion.mp4",
      isVideo: true,
      link: "https://github.com/Shaun-Allan/Fusion",
      baseRowSpan: 1,
      baseColSpan: 1,
      objectPosition: "left top",
    },

  ];

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Clone baseProjects to avoid mutation
    let orderedProjects = [...baseProjects];

    // Reorder based on windowWidth
    if (windowWidth < 768) {
      // Example: prioritize AI DIDI and aSapRoute on mobile
      orderedProjects = [
        baseProjects[0], // aSapRoute
        baseProjects[2], // Wassup
        baseProjects[4], // Fusion
        baseProjects[3], // AI DIDI
        baseProjects[1], // Invente
      ];
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      // Example: put Fusion earlier on tablets
      orderedProjects = [
        baseProjects[4], // Fusion
        baseProjects[0], // aSapRoute
        baseProjects[2], // Wassup
        baseProjects[3], // AI DIDI
        baseProjects[1], // Invente
      ];
    }
    // else keep original order for large screens

    // Then adjust span dynamically
    const processedProjects = orderedProjects.map((p) => {
      let rowSpan = p.baseRowSpan;
      let colSpan = p.baseColSpan;

      if (windowWidth < 768) {
        rowSpan = 1;
        colSpan = 1;
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        colSpan = Math.min(colSpan, 2);
      }

      return {
        ...p,
        rowSpan,
        colSpan,
      };
    });

    setProjects(processedProjects);
  }, [windowWidth]);

  // Animation variants for each project card - now with individual scroll trigger
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 1
    },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth animation
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.h2 
          className="section-heading pb-[2px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            // Set CSS Grid row and column spans inline
            const style = {
              gridRowEnd: project.rowSpan ? `span ${project.rowSpan}` : undefined,
              gridColumnEnd: project.colSpan ? `span ${project.colSpan}` : undefined,
            };

            return (
              <motion.div 
                key={index} 
                style={style}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ 
                  once: true, 
                  amount: 0.3, // Trigger when 30% of the card is visible
                  margin: "-100px" // Start animation 100px before the card enters viewport
                }}
                // Add a slight delay based on index for stagger effect
                transition={{ 
                  delay: index * 0.1, // 0.1s delay between each card
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;