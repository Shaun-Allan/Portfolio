import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {

   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

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
      description: "A cloud-based mobile application designed to estimate real-time landslide vulnerability by integrating NASA’s LHASA 2.0 model with crowdsourced geospatial data. The system forecasts potential landslide events with an average prediction accuracy of 74.56%, helping users make informed decisions during travel. It dynamically analyzes current risk zones and suggests safer alternate routes, enhancing situational awareness and public safety during heavy rainfall or disaster-prone conditions.",
      tags: ["Flutter", "GCP", "Flask", "Python"],
      media: "/projects/aSapRoute.mp4",
      isVideo: true,
      link: "https://github.com/Shaun-Allan/aSapRoute",
      baseRowSpan: 2,
      baseColSpan: 1,
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
    },
    {
      title: "Fusion & Fusion Virtual Machine",
      description: "Fusion involves the design and implementation of a compiled object-oriented programming language inspired by the syntax of Python and Go. The language is executed on a custom-built virtual machine that supports stack-based operations and manages memory efficiently.  The compiler achieves high performance with a compilation speed exceeding 1,200 lines of code per second, enabled by optimized parsing and code generation techniques.",
      tags: ["C++"],
      media: "/projects/Fusion.mp4",
      isVideo: true,
      link: "https://github.com/Shaun-Allan/Fusion",
      baseRowSpan: 1,
      baseColSpan: 1,
    },
    {
      title: "Invente '24 & Instincts '25",
      description: "Developed and maintained the official websites for the institution's flagship cultural festivals.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      media: "/projects/Instincts 25.mp4",
      isVideo: true,
      link: "https://www.ssnsnucinstincts.com/",
      baseRowSpan: 1,
      baseColSpan: 2,
    },
    
  ];

  const projects = baseProjects.map((p) => {
    let rowSpan = p.baseRowSpan;
    let colSpan = p.baseColSpan;

    if (windowWidth < 768) {
      // small screen (mobile) — force spans to 1
      rowSpan = 1;
      colSpan = 1;
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      // medium screen — maybe modify
      // example: keep original rowSpan, but max colSpan = 1
      colSpan = Math.min(colSpan, 2);
    }
    // large screens: keep original spans

    return {
      ...p,
      rowSpan,
      colSpan,
    };
  });

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="section-heading pb-[2px]">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            // Set CSS Grid row and column spans inline
            const style = {
              gridRowEnd: project.rowSpan ? `span ${project.rowSpan}` : undefined,
              gridColumnEnd: project.colSpan ? `span ${project.colSpan}` : undefined,
            };

            return (
              <div key={index} style={style}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;