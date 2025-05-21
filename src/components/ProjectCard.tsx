import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Inject CSS styles once on mount
    const style = document.createElement('style');
    style.innerHTML = `
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

      .gradient-border {
        position: absolute;
        inset: -0.5rem; /* slightly outside card */
        border-radius: 0.5rem; /* match card rounded-lg */
        background: linear-gradient(270deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
        background-size: 400% 400%;
        filter: blur(150px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
        z-index: 0;
      }

      .group:hover .gradient-border {
        opacity: 1;
        animation: gradient-move 6s ease infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle animated gradient light border */}
      <div className="gradient-border"></div>

      <Card className="relative overflow-hidden h-full z-10 rounded-lg">
        <div className="h-48 overflow-hidden relative rounded-t-lg">
          {project.isVideo ? (
            <video
              src={project.media}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
              autoPlay
              loop
              muted
              controls={false}
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-t-lg" />
        </div>

        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-foreground/80 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>

          <a
            href={project.link}
            className="inline-flex items-center text-primary hover:text-primary/80 mt-auto"
          >
            View Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M6.5 3.5L11.5 8.5L6.5 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
