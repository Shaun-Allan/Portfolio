
// import { useRef, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Text, OrbitControls, Float } from "@react-three/drei";
// import * as THREE from "three";

// const TechSphere = ({ techStack }: { techStack: string[] }) => {
//   const groupRef = useRef<THREE.Group>(null);

//   useEffect(() => {
//     if (!groupRef.current) return;
//   }, []);

//   return (
//     <group ref={groupRef}>
//       {techStack.map((tech, i) => {
//         const phi = Math.acos(-1 + (2 * i) / techStack.length);
//         const theta = Math.sqrt(techStack.length * Math.PI) * phi;
//         const radius = 5;

//         const x = radius * Math.cos(theta) * Math.sin(phi);
//         const y = radius * Math.sin(theta) * Math.sin(phi);
//         const z = radius * Math.cos(phi);

//         return (
//           <Float key={tech} speed={1} rotationIntensity={1} floatIntensity={1}>
//             <Text
//               position={[x, y, z]}
//               color={getRandomColor()}
//               fontSize={0.5}
//               font="/fonts/Inter-Bold.woff"
//               anchorX="center"
//               anchorY="middle"
//             >
//               {tech}
//             </Text>
//           </Float>
//         );
//       })}
//     </group>
//   );
// };

// const getRandomColor = () => {
//   const colors = ["#36DBFF", "#B16CEA", "#FF7EB3", "#FFA26B", "#00FFB2"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// const TechStackSection = () => {
//   const techStackFrontend = [
//     "React", "Angular", "Next.js", "Redux", 
//     "HTML", "CSS", "Tailwind CSS", "Three.js"
//   ];

//   const techStackBackend = [
//     "Express", "Springboot", 
//     "Node.js", "MongoDB", "MySQL", "PostgreSQL", "Cassandra"
//   ];

//   const techStackLanguages = [
//     "Python", "JavaScript", "Java", 
//     "Dart", "GoLang", "SQL", "CSQL", "C", "C++"
//   ];

//   const techStackOther = [
//     "Flutter", "Android Studio", "Kafka", "RabbitMQ", 
//     "Git", "GitHub", "Docker", "Kubernetes", "TensorFlow", "GCP", "AWS"
//   ];

//   const allTech = [...techStackFrontend, ...techStackBackend, ...techStackLanguages, ...techStackOther];

//   return (
//     <section id="tech" className="section bg-gradient-to-b from-background to-black">
//       <div className="container-custom">
//         <h2 className="section-heading">Tech Stack</h2>

//         <div className="h-[60vh] w-full relative mb-12">
//           <Canvas className="tech-canvas">
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} intensity={1} />
//             <TechSphere techStack={allTech} />
//             <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
//           </Canvas>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="glass p-6 rounded-xl card-hover">
//             <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Languages</h3>
//             <div className="flex flex-wrap gap-2">
//               {techStackLanguages.map((tech, idx) => (
//                 <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="glass p-6 rounded-xl card-hover">
//             <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Frontend</h3>
//             <div className="flex flex-wrap gap-2">
//               {techStackFrontend.map((tech, idx) => (
//                 <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="glass p-6 rounded-xl card-hover">
//             <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Backend</h3>
//             <div className="flex flex-wrap gap-2">
//               {techStackBackend.map((tech, idx) => (
//                 <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="glass p-6 rounded-xl card-hover">
//             <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Other</h3>
//             <div className="flex flex-wrap gap-2">
//               {techStackOther.map((tech, idx) => (
//                 <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;




import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';




const technologies = [
  // Languages
  { name: "Python", category: "language", img: "/tech/python.png" },
  { name: "JavaScript", category: "language", img: "/tech/js.png" },
  { name: "TypeScript", category: "language", img: "/tech/ts.png" },
  { name: "Java", category: "language", img: "/tech/java.png" },
  { name: "Dart", category: "language", img: "/tech/dart.png" },
  { name: "GoLang", category: "language", img: "/tech/go.png" },
  { name: "SQL", category: "language", img: "/tech/sql.png" },
  { name: "C/C++", category: "language", img: "/tech/c-c++.png" },

  // Frontend
  { name: "React", category: "frontend", img: "/tech/react.png" },
  { name: "Angular", category: "frontend", img: "/tech/angular.png" },
  { name: "Next.js", category: "frontend", img: "/tech/next.png" },
  { name: "Redux", category: "frontend", img: "/tech/redux.png" },
  { name: "HTML", category: "frontend", img: "/tech/html.png" },
  { name: "CSS", category: "frontend", img: "/tech/css.png" },
  { name: "Tailwind", category: "frontend", img: "/tech/tailwind.png" },
  { name: "Three.js", category: "frontend", img: "/tech/three.png" },

  // Mobile
  { name: "Flutter", category: "mobile", img: "/tech/flutter.png" },
  { name: "Android Studio", category: "mobile", img: "/tech/android.png" },

  // Backend
  { name: "Express", category: "backend", img: "/tech/express.png" },
  { name: "SpringBoot", category: "backend", img: "/tech/springboot.png" },
  { name: "Node.js", category: "backend", img: "/tech/node.png" },

  // Database
  { name: "MongoDB", category: "database", img: "/tech/mongo.png" },
  { name: "MySQL", category: "database", img: "/tech/mysql.png" },
  { name: "PostgreSQL", category: "database", img: "/tech/postgre.png" },
  { name: "Cassandra", category: "database", img: "/tech/cassandra.png" },

  // DevOps & Tools
  { name: "Kafka", category: "tools", img: "/tech/kafka.png" },
  { name: "Git", category: "tools", img: "/tech/git.png" },
  { name: "Docker", category: "tools", img: "/tech/docker.png" },
  { name: "Kubernetes", category: "tools", img: "/tech/kubernetes.png" },
  { name: "TensorFlow", category: "tools", img: "/tech/tensorflow.png" },
  { name: "GCP", category: "tools", img: "/tech/gcp.png" },
  { name: "AWS", category: "tools", img: "/tech/aws.png" },
];

// Assign colors based on category
const getColorForCategory = (category: string): string => {
  switch (category) {
    case "language": return "#8B5CF6"; // Purple
    case "frontend": return "#EC4899"; // Pink
    case "mobile": return "#3B82F6"; // Blue
    case "backend": return "#10B981"; // Green
    case "database": return "#F59E0B"; // Amber
    case "tools": return "#6366F1"; // Indigo
    default: return "#CBD5E1"; // Slate
  }
};

const TechCloud = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sunTexture = useLoader(THREE.TextureLoader, '/tech/sun.jpg');


  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const createSpherePositions = (count: number, radius: number) => {
    const positions = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius_y = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius_y * 1.3;
      const z = Math.sin(theta) * radius_y * 1.3;

      positions.push([x * radius, y * radius, z * radius]);
    }

    return positions;
  };

  const positions = createSpherePositions(technologies.length, 5);

  return (
    <>
      <group ref={groupRef}>
        {technologies.map((tech, i) => {
          const size = Math.max(Math.random() * 0.9, 0.3);
          const texture = useLoader(THREE.TextureLoader, tech.img);
          return (
            <Float
              key={tech.name}
              speed={1.5}
              rotationIntensity={0}
              floatIntensity={2}
              position={positions[i] as [number, number, number]}
            >

              <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                  map={texture}
                  emissive="#ffaa00"
                  emissiveIntensity={0}
                  roughness={10}
                  metalness={0.2}
                />
              </mesh>
              <Text
                position={[0, -size - 0.2, 0]}
                fontSize={0.2}
                color={getColorForCategory(tech.category)}
                anchorX="center"
                anchorY="middle"
              >
                {tech.name}
              </Text>
            </Float>
          )
        })}

        {/* Center Sun-like sphere */}
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            map={sunTexture}
            emissive="#ffaa00"
            emissiveIntensity={0.2}
            roughness={10}
            metalness={0.2}
          />
        </mesh>

        <pointLight
          position={[0, 0, 0]}
          intensity={2}
          distance={20}
          decay={2}
          color="#ffaa00"
          castShadow
        />


      </group>

    </>

  );
};



const techStackFrontend = [
  "React", "Angular", "Next.js", "Redux",
  "HTML", "CSS", "Tailwind CSS", "Three.js"
];

const techStackBackend = [
  "Express", "Springboot", "Flask",
  "Node.js", "MongoDB", "MySQL", "PostgreSQL", "Cassandra"
];

const techStackLanguages = [
  "Python", "JavaScript", "TypeScript", "Java",
  "Dart", "GoLang", "SQL", "CSQL", "C", "C++"
];

const techStackOther = [
  "Flutter", "Android Studio", "Kafka", "RabbitMQ",
  "Git", "GitHub", "Docker", "Kubernetes", "TensorFlow", "GCP", "AWS"
];

const TechStack = () => {
  const gradientGlowClasses = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-cyan-400 via-blue-500 to-indigo-500",
    "from-green-400 via-teal-500 to-blue-500",
    "from-yellow-400 via-orange-500 to-pink-500",
    "from-pink-400 via-rose-500 to-purple-500",
    "from-indigo-400 via-purple-500 to-pink-500",
    "from-teal-400 via-lime-500 to-green-500"
  ];

  return (
    <section id="tech" className="section">
      <div className="container-custom">
        <h2 className="section-heading">Tech Stack</h2>

        <div className="h-[80vh] w-full mt-0 mb-20 relative">
          <Canvas className='border-2 border-white/10 rounded-xl shadow-lg shadow-black/50'>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <TechCloud />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
          <div className="absolute top-[65vh]  animate-bounce" style={{ left: 'calc(50% - 20px)' }}>
            <a href="#stacks" className="text-white/50 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>

        </div>



        <div id="stacks" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl card-hover">
            <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {techStackLanguages.map((tech, idx) => {
                const gradient = gradientGlowClasses[idx % gradientGlowClasses.length];
                return (
                  <span
                    key={idx}
                    className={`
                      relative px-3 py-1 rounded-full text-sm 
                      bg-white/5 text-white transition duration-300
                      hover:before:opacity-60 before:opacity-0
                      before:absolute before:inset-0 before:rounded-full
                      before:blur-sm before:transition before:duration-300
                      before:bg-gradient-to-r ${gradient}
                      z-10
                    `}
                  >
                    <span className="relative z-20">{tech}</span>
                  </span>
                );
              })}


            </div>
          </div>

          <div className="glass p-6 rounded-xl card-hover">
            <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {techStackFrontend.map((tech, idx) => {
                const gradient = gradientGlowClasses[idx % gradientGlowClasses.length];
                return (
                  <span
                    key={idx}
                    className={`
                      relative px-3 py-1 rounded-full text-sm 
                      bg-white/5 text-white transition duration-300
                      hover:before:opacity-60 before:opacity-0
                      before:absolute before:inset-0 before:rounded-full
                      before:blur-sm before:transition before:duration-300
                      before:bg-gradient-to-r ${gradient}
                      z-10
                    `}
                  >
                    <span className="relative z-20">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="glass p-6 rounded-xl card-hover">
            <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {techStackBackend.map((tech, idx) => {
                const gradient = gradientGlowClasses[idx % gradientGlowClasses.length];
                return (
                  <span
                    key={idx}
                    className={`
                      relative px-3 py-1 rounded-full text-sm 
                      bg-white/5 text-white transition duration-300
                      hover:before:opacity-60 before:opacity-0
                      before:absolute before:inset-0 before:rounded-full
                      before:blur-sm before:transition before:duration-300
                      before:bg-gradient-to-r ${gradient}
                      z-10
                    `}
                  >
                    <span className="relative z-20">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="glass p-6 rounded-xl card-hover">
            <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Other</h3>
            <div className="flex flex-wrap gap-2">
              {techStackOther.map((tech, idx) => {
                const gradient = gradientGlowClasses[idx % gradientGlowClasses.length];
                return (
                  <span
                    key={idx}
                    className={`
                      relative px-3 py-1 rounded-full text-sm 
                      bg-white/5 text-white transition duration-300
                      hover:before:opacity-60 before:opacity-0
                      before:absolute before:inset-0 before:rounded-full
                      before:blur-sm before:transition before:duration-300
                      before:bg-gradient-to-r ${gradient}
                      z-10
                    `}
                  >
                    <span className="relative z-20">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechStack;