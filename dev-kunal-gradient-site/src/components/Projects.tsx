import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Quiz System",
      description:
        "An AI-powered quiz platform with leaderboard, user dashboard, and teacher-student features built using the MERN stack.",
      image: "/smart.png",
      liveUrl: "https://smart-quiz-system-uuqh.vercel.app/",
      githubUrl: "https://github.com/Kunalkhuteta/smart-quiz-system",
      tags: ["React", "Node.js", "MongoDB", "AI", "ExpressJS", "Tailwind CSS", ],
    },
    {
      title: "LeetCode",
      description:
        "Solved 270+ LeetCode problems, demonstrating strong command over diverse data structures and algorithms. Experienced in tackling a wide range of problem types with efficient, optimized, and scalable solutions.",
      image: "/leetcode.png",
      liveUrl: "https://leetcode.com/u/KUNALOP/",
      githubUrl: "https://github.com/Kunalkhuteta/leetcode",
      tags: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
               My Work
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my latest work and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-background group/btn"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-background group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
