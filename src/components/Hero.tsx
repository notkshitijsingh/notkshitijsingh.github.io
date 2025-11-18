import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const name = "KSHITIJ SINGH";
  const letters = name.split("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getRandomPosition = (index: number) => {
    const angle = (index / letters.length) * 360;
    const radius = 150;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Scattered letters animation */}
        <div className="relative h-32 mb-8">
          {letters.map((letter, index) => {
            const pos = getRandomPosition(index);
            return (
              <span
                key={index}
                className={`absolute left-1/2 top-1/2 text-5xl md:text-7xl font-bold text-foreground transition-all duration-1000 ${
                  isVisible ? "" : "opacity-0"
                }`}
                style={{
                  transform: isVisible
                    ? "translate(-50%, -50%)"
                    : `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${pos.x}deg)`,
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            );
          })}
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Programmer Analyst - SDET
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions with{" "}
            <span className="gradient-text font-semibold">AI/ML</span>,{" "}
            <span className="gradient-text font-semibold">Full-Stack Development</span>, and{" "}
            <span className="gradient-text font-semibold">Test Automation</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/notkshitijsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/kshitij-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:chaharkshitij@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
