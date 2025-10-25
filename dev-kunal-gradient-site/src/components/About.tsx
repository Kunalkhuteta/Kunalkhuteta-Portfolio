import { Code, Brain, Rocket, Terminal } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Expertise in MERN stack development",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Building intelligent applications",
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Creating modern web experiences",
    },
    {
      icon: Terminal,
      title: "C++ & DSA",
      description: "Strong foundation in C++ programming and data structures & algorithms",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a <span className="text-secondary font-semibold">MERN + AI Developer</span> passionate
              about creating intelligent web applications that blend functionality with innovation.
              My goal is to build modern web experiences powered by smart AI systems. I also have a
              strong background in <span className="text-accent font-semibold">C++</span> and{" "}
              <span className="text-accent font-semibold">Data Structures & Algorithms</span>, which
              helps me write efficient and optimized code for any project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              With expertise in full-stack development, AI integration, and competitive programming,
              I strive to create solutions that not only meet user needs but exceed expectations.
              I'm constantly learning and adapting to new technologies to stay at the forefront of
              web development.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
