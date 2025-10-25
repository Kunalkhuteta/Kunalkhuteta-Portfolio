import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import kunalPhoto from "@/assets/kunal-photo.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Hi, I'm Kunal Khuteta",
    "A Passionate MERN + AI Developer",
    "C++ & DSA Enthusiast",
  ];

  useEffect(() => {
    let charIndex = 0;
    const currentPhrase = phrases[currentPhraseIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 animate-fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 min-h-[80px]">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </h1>
              {/* Quick skill badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  MERN
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                  AI
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  DSA
                </span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              BCA Student & Full-Stack Developer specializing in building intelligent web
              applications with the MERN stack, AI integration, and strong C++ & DSA
              skills. Passionate about creating seamless user experiences and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-semibold group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Hire Me
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button> */}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-glow"></div>
              <img
                src={kunalPhoto}
                alt="Kunal Khuteta"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
