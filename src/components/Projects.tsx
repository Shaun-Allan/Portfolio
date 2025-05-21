import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  // Sample projects data - replace with your actual data
  const projects = [
    {
      title: "aSapRoute",
      description: "A modern web application with interactive dashboards",
      tags: ["Flutter", "GCP", "Flask", "Python"],
      media: "/projects/aSapRoute.png",
      isVideo: false,
      link: "/projects/aSapRoute.png"
    },
    {
      title: "Instincts '25",
      description: "Dynamic video presentation of our animation capabilities",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      media: "/projects/Instincts 25.webm",
      isVideo: true,
      link: "/projects/showcase"
    },
    {
      title: "AI DIDI",
      description: "Fully responsive e-commerce site with payment integration",
      tags: ["React JS", "Flask", "Python"],
      media: "/images/ecommerce.jpg",
      isVideo: false,
      link: "/projects/ecommerce"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="section-heading pb-[2px]">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;