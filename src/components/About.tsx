import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            I'm a passionate developer focused on creating intelligent, scalable solutions. 
            Currently working at Cognizant, I specialize in full-stack development, AI/ML, and test automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <Card className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-glow animate-fade-in">
            <div className="mb-4 p-3 w-fit rounded-xl bg-muted group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Education</h3>
            <p className="text-muted-foreground mb-2">B.Tech in Computer Science</p>
            <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Bhopal</p>
            <p className="text-sm text-muted-foreground">CGPA: 8.27 | Aug 2025</p>
            <p className="text-sm text-primary mt-2">Specialization: AI & Machine Learning</p>
          </Card>

          {/* Experience */}
          <Card className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-glow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="mb-4 p-3 w-fit rounded-xl bg-muted group-hover:bg-secondary/20 transition-colors">
              <Briefcase className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">Experience</h3>
            <p className="text-muted-foreground mb-2">Programmer Analyst - SDET</p>
            <p className="text-sm text-muted-foreground">Cognizant Technology Solutions</p>
            <p className="text-sm text-muted-foreground">Jul 2025 - Present</p>
            <p className="text-sm text-secondary mt-2">Gen-C Next Program Graduate</p>
          </Card>

          {/* Highlights */}
          <Card className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-4 p-3 w-fit rounded-xl bg-muted group-hover:bg-primary/20 transition-colors">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Highlights</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 91.54% AI Colorization Accuracy</li>
              <li>• 20% Water Quality Prediction Boost</li>
              <li>• Agile Scrum Expert</li>
              <li>• Open Source Contributor</li>
            </ul>
          </Card>
        </div>

        {/* Philosophy */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            "In code and in life, I strive to keep only what matters and remove the rest. 
            What stays is <span className="gradient-text font-semibold">stronger</span>, 
            <span className="gradient-text font-semibold"> clearer</span>, and 
            <span className="gradient-text font-semibold"> more meaningful</span>."
          </blockquote>
        </Card>
      </div>
    </section>
  );
};

export default About;
