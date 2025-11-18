import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chaharkshitij@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 80820 84014");
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <Card
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-glow cursor-pointer"
              onClick={handleCopyEmail}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">
                    chaharkshitij@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-glow cursor-pointer"
              onClick={handleCopyPhone}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-muted group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-lg font-medium group-hover:text-secondary transition-colors">
                    +91 80820 84014
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/notkshitijsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-foreground hover:bg-primary/10 gap-2"
                >
                  <Github size={20} />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/kshitij-singh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-foreground hover:bg-primary/10 gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30 animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether it's a groundbreaking AI project, a sleek web application, or robust test automation - 
              I'm always excited to collaborate on innovative ideas that push boundaries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Available for freelance work</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
                <span>Open to full-time opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Love discussing new tech & ideas</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm">
            © 2025 Kshitij Singh. Crafted with passion and code.
          </p>
          <p className="text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
