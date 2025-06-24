
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const productSkills = [
    "Product Strategy & Roadmap",
    "Cross-functional Leadership", 
    "Data-Driven Product Development",
    "Stakeholder Management",
    "GTM Planning",
    "UX Design",
    "A/B Testing",
    "User Research (Interviews, Surveys, FGDs)"
  ];

  const technicalSkills = [
    "AI Agents (for prototyping)",
    "Figma (for UI/UX)",
    "Data Analytics (Python, SQL, Excel)",
    "Git",
    "Conversion Optimisation", 
    "Cohort & Retention Analysis",
    "Rapid Prototyping"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🎯</span>
                <span>Product Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {productSkills.map((skill, index) => (
                  <Badge key={index} variant="default" className="hover-scale">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span>Technical Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="hover-scale">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
