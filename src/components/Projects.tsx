import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Employee Wellness Portal",
    description: "Full-stack wellness platform with AI-powered survey analysis and chat assistance. Features JWT authentication, MySQL database, and comprehensive testing suite.",
    tags: ["Angular", "Spring Boot", "MySQL", "Genkit", "Selenium"],
    date: "Oct 2025",
    github: "#",
    demo: "#",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AgileFlow AI",
    description: "Intelligent Agile Scrum partner that auto-generates project boards from descriptions. Features drag-and-drop interface, burndown charts, and an AI Agile coach.",
    tags: ["Next.js", "React", "TypeScript", "Genkit", "Tailwind"],
    date: "Sep 2025",
    github: "#",
    demo: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "VanGogh Image Colorization",
    description: "Advanced AI model combining CNNs and Conditional GANs to colorize black-and-white images with 91.54% accuracy. Creates realistic Van Gogh-style color renditions.",
    tags: ["Python", "PyTorch", "GANs", "Computer Vision"],
    date: "Jan 2023",
    github: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Omdena Water Quality Monitoring",
    description: "Open-source water quality prediction using satellite imagery. Improved accuracy by 20% through data preprocessing and model optimization.",
    tags: ["Python", "Scikit-Learn", "Data Analytics"],
    date: "May 2023",
    github: "#",
    gradient: "from-green-500 to-teal-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest work in AI, full-stack development, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
