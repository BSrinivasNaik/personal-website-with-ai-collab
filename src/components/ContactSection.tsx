
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground">
                  Whether you're a recruiter, potential co-founder, or just want to chat about product strategy, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="hover-scale"
                  onClick={() => window.open('mailto:bsrinivasnaik96@gmail.com')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale"
                  onClick={() => window.open('https://www.linkedin.com/in/bhukya-srinivas-naik-iima/', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  📧 bsrinivasnaik96@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
