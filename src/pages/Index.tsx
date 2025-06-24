
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, FileText, ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Product Stories", id: "stories" },
    { label: "Hobbies", id: "hobbies" },
    { label: "Contact Me", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Srinivas Naik</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/bhukya-srinivas-naik-iima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/BSrinivasNaik"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:text-primary transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="hover:text-primary transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:text-primary transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 hover:text-primary transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex space-x-4 px-3 py-2">
                  <a
                    href="https://www.linkedin.com/in/bhukya-srinivas-naik-iima/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/BSrinivasNaik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        
        {/* Product Stories Section */}
        <section id="stories" className="py-20 bg-muted/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Product Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Namma Yatri Partners: Our Brand Ambassadors
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Deep dive into how auto-drivers became the face of our platform and the strategic thinking behind community-driven growth.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">Product Strategy</Badge>
                    <a
                      href="https://github.com/orgs/nammayatri/discussions/394"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Reimagining Notion's Product Experience
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Product analysis and framework-driven approach to enhancing user productivity and collaboration features.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">Product Analysis</Badge>
                    <a
                      href="https://luck-shelf-92c.notion.site/Notion-2177658cf5e3802e998cd3f4544317c8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <HobbiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Srinivas Naik Bhukya. Built with passion for great products.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
