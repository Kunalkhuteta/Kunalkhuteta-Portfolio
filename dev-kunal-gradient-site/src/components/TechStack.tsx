import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

// Import your custom icons from assets
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/nodejs.png";
import expressIcon from "../assets/express.png";
import mongoIcon from "../assets/mongodb.png";
import tailwindIcon from "../assets/tailwind.png";
import pythonIcon from "../assets/mongodb.png";
import Cpp from "../assets/cpp.png";
import github from "../assets/github.png";
import ts from "../assets/ts.png";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "HTML", icon: htmlIcon, role: "Frontend" },
    { name: "CSS", icon: cssIcon, role: "Frontend" },
    { name: "JavaScript", icon: jsIcon, role: "Frontend" },
    { name: "React", icon: reactIcon, role: "Frontend" },
    { name: "Node.js", icon: nodeIcon, role: "Backend" },
    { name: "Express", icon: expressIcon, role: "Backend" },
    { name: "MongoDB", icon: mongoIcon, role: "Database" },
    { name: "Tailwind CSS", icon: tailwindIcon, role: "Tools" },
    { name: "C++", icon: Cpp, role: "Language" },
    { name: "Github", icon: github, role: "Version Control" },
    { name: "Ts", icon: ts, role: "Frontend" },

  ];

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
    Tech Stack
  </span>
</h2>

          <p className="text-muted-foreground text-lg mt-4">
            Powerful technologies I leverage to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            return (
              <div
                key={tech.name}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2">
                  {/* Circular Icon */}
                  <div className="relative mx-auto w-20 h-20 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Tech Name */}
                  <h3 className="text-center font-semibold text-foreground mb-2">
                    {tech.name}
                  </h3>

                  {/* Role Badge */}
                  <div className="flex justify-center">
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech.role}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
