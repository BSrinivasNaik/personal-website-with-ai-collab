
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences = [
    {
      icon: "/Nammayatri.jpg",
      headline: "Product Manager at Namma Yatri",
      subheadline: "Oct 2022 – Present",
      description: [
        "Launched monetisation playbook; scaled to 4.5L drivers, 22.7% avg. MRR growth",
        "Led multimodal stack; enabling single unified QR ticketing for 45L+ users", 
        "Headed data team and Open Data Project; drove 8× conversion, 2L+ daily rides",
        "Engineered and launched core driver & rider features—boosting driver acceptance by 30% and rider DAU from 5K to 350K."
      ]
    },
    {
      icon: "/Medianet.png",
      headline: "Associate Product Manager at Media.net", 
      subheadline: "May 2020 – Dec 2020",
      description: [
        "Led DSP integrations; scaled advertiser spend to $50K+ daily",
        "Improved ad targeting accuracy by 10% across platforms",
        "Tested bidding strategies; increased wins(7% uplift) and reduced costs"
      ]
    },
    {
      icon: "/IIMAhmedabad.png",
      headline: "MBA from IIM Ahmedabad",
      subheadline: "July 2018 – May 2020", 
      description: [
        "GPA: 3.29/4.33 with 'A' grade in 17 courses",
        "Won multiple competitions in Product Management and Marketing",
        "Built agri-tech app connecting ₹3.1Cr/day \"ugly\" produce to urban demand"
      ]
    },
    {
      icon: "/IITBombay.png",
      headline: "B.Tech in CSE from IIT Bombay",
      subheadline: "July 2014 – May 2018",
      description: [
        "Graduated with 8.31 CGPA; scored 10/9 in 27 core technical courses", 
        "Worked on multiple key projects across Networks, Image Processing and College Utility applications"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img src={exp.icon} alt={exp.headline} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.headline}</h3>
                        <p className="text-muted-foreground">{exp.subheadline}</p>
                      </div>
                      <div className="ml-4">
                        {expandedItem === index ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    
                    {expandedItem === index && (
                      <div className="mt-4 space-y-2 animate-fade-in">
                        {exp.description.map((item, idx) => (
                          <p key={idx} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
