
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowDown, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  const [currentSubheadline, setCurrentSubheadline] = useState(0);
  
  const subheadlines = [
    "Product leader with CSE (IIT B) and MBA (IIM A), blending tech and strategy",
    "Proven in building and scaling 0→1 products across tech domains",
    "Hands-on with data, scripting, and rapid prototyping",
    "Collaborates effectively across teams; aligns diverse stakeholders", 
    "Lifelong learner with a builder's mindset and clarity of thought",
    "Empathetic problem solver with a user-first approach"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubheadline((prev) => (prev + 1) % subheadlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStories = () => {
    document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* AI-inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/20"></div>
      
      {/* Animated geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl floating"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/15 rounded-full blur-2xl floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-24 bg-primary/30 rounded-full transform -rotate-12 pulse-glow"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-20 bg-secondary/30 rounded-full transform rotate-45 pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 left-1/3 w-1 h-16 bg-accent/40 rounded-full transform rotate-12"></div>
      
      {/* Matrix-like grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary neon-glow">Srinivas</span> –<br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Product Leader & Innovator
                </span>
              </h1>
              
              <div className="mt-6 h-16 flex items-center">
                <p className="text-lg sm:text-xl text-muted-foreground font-medium animate-fade-in">
                  <strong className="text-foreground">{subheadlines[currentSubheadline]}</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} size="lg" className="hover-scale bg-primary/90 hover:bg-primary neon-glow">
                View Projects
              </Button>
              <Button onClick={scrollToStories} variant="outline" size="lg" className="hover-scale border-primary/50 hover:border-primary hover:bg-primary/10">
                Read My Product Ideas
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-secondary/50 hover:border-secondary hover:bg-secondary/10">
                <FileText className="mr-2 h-4 w-4" />
                Preview CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <a
                href="https://www.linkedin.com/in/bhukya-srinivas-naik-iima/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg ai-card hover:neon-glow transition-all duration-300 hover-scale"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/BSrinivasNaik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg ai-card hover:neon-glow transition-all duration-300 hover-scale"
              >
                <Github className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full ai-gradient flex items-center justify-center backdrop-blur-sm border-2 border-primary/30 neon-glow floating">
                <div className="w-72 h-72 rounded-full ai-card flex items-center justify-center text-6xl font-bold text-primary backdrop-blur-sm">
                  SN
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg neon-glow pulse-glow">
                <span className="text-2xl">👋</span>
              </div>
              {/* Orbiting elements */}
              <div className="absolute top-10 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 -left-2 w-2 h-2 bg-secondary/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
