
import { Card, CardContent } from "@/components/ui/card";

const HobbiesSection = () => {
  const hobbies = [
    { name: "Fitness Training", icon: "💪", description: "Staying fit and healthy" },
    { name: "Badminton", icon: "🏸", description: "Competitive sport enthusiast" },
    { name: "Cooking", icon: "👨‍🍳", description: "Exploring new cuisines" },
    { name: "Podcasts & Movies", icon: "🎧", description: "Learning and entertainment" },
    { name: "Biking", icon: "🏍️", description: "Adventure and exploration" }
  ];

  return (
    <section id="hobbies" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Hobbies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <h3 className="font-semibold mb-2">{hobby.name}</h3>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
