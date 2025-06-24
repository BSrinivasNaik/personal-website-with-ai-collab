
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
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-primary/20 rounded-full transform -rotate-12"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-16 bg-muted-foreground/20 rounded-full transform rotate-45"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Srinivas</span> –<br />
                Product Leader & Innovator
              </h1>
              
              <div className="mt-6 h-16 flex items-center">
                <p className="text-lg sm:text-xl text-muted-foreground font-medium animate-fade-in">
                  <strong>{subheadlines[currentSubheadline]}</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} size="lg" className="hover-scale">
                View Projects
              </Button>
              <Button onClick={scrollToStories} variant="outline" size="lg" className="hover-scale">
                Read My Product Ideas
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-scale"
              >
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/BSrinivasNaik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-scale"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="w-72 h-72 rounded-full bg-muted/80 flex items-center justify-center text-6xl font-bold text-primary backdrop-blur-sm">
                  SN
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
