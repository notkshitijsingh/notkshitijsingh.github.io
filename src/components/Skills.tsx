import { Card } from "@/components/ui/card";
import { Code2, Database, Boxes, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "TypeScript", "HTML", "CSS"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: ["React.js", "Next.js", "Angular", "Spring Boot", "Flask", "Docker"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["PyTorch", "Scikit-Learn", "Genkit", "Computer Vision", "GANs"],
    gradient: "from-green-500 to-teal-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-6 relative z-10">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-muted group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "High Performance Coding in DSA - iamneo",
              "Data Analytics Professional - Google",
              "Applied Machine Learning in Python - University of Michigan",
            ].map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-glow"
              >
                <p className="text-foreground">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
