import React, { useState, useEffect, useRef } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { relative } from 'path';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const descRef = useRef(null);
  const [descMaxHeight, setDescMaxHeight] = useState('3rem'); // default 2 lines height approx

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
        inset: -0.5rem;
        border-radius: 0.5rem;
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

  useEffect(() => {
    if (descRef.current) {
      if (showFullDesc) {
        // full height of the content
        setDescMaxHeight(`${descRef.current.scrollHeight}px`);
      } else {
        // approx height for 2 lines, adjust as needed
        setDescMaxHeight('3rem');
      }
    }
  }, [showFullDesc, project.description]);

  const baseRowHeight = 384;
  const extraRowHeight = 12;
  const baseColWidth = 320;
  const extraColWidth = 16;

  const { rowSpan, colSpan } = project;

  const totalHeight =
    rowSpan > 1
      ? `calc(${baseRowHeight}px * ${rowSpan} + ${extraRowHeight}px * ${rowSpan})`
      : `calc(${baseRowHeight}px * ${rowSpan})`;

  // Calculate the container height properly - only expand for rowSpan === 1
  const containerHeight = (showFullDesc && rowSpan === 1)
    ? `calc(${totalHeight} + ${descMaxHeight})` 
    : totalHeight;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gradient-border"></div>

      <Card className="relative overflow-hidden h-full z-10 rounded-lg">
        <div
          className="overflow-hidden relative rounded-t-lg transition-all duration-500 ease-in-out"
          style={{
            height: containerHeight,
          }}
        >
          {project.isVideo ? (
            <video
              src={project.media}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                objectPosition: project.objectPosition || 'center'
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
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-t-lg" />

          <div className="p-6 flex flex-col absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            {/* Animated description container */}
            <div
              ref={descRef}
              style={{
                maxHeight: rowSpan === 1 ? descMaxHeight : (showFullDesc ? `${descRef.current?.scrollHeight}px` : '3rem'),
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <p className="text-foreground/80 mb-2 whitespace-pre-line">
                {showFullDesc 
                  ? project.description 
                  : project.description.length > 100 
                    ? `${project.description.substring(0, 100)}...`
                    : project.description
                }
              </p>
            </div>

            {project.description.length > 100 && (
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="text-primary hover:text-primary/80 font-semibold mb-4 self-start transition-colors duration-200"
                type="button"
              >
                {showFullDesc ? 'See Less' : 'See More'}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/100">
                  {tag}
                </Badge>
              ))}
            </div>

            <a
              href={project.link}
              target='__blank'
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
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;