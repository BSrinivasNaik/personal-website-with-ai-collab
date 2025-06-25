
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Driver Subscriptions & Platform Fee Automation",
      icon: `${import.meta.env.BASE_URL}Nammayatri.jpg`,
      description: [
        "Built 0→1 revenue platform across 9 cities, achieving breakeven in 18 months",
        "Designed UPI Autopay flow; boosted success rate from 86% to 92%",
        "Managed full product lifecycle; scaled to 4.5L drivers with 22.7% avg. MRR growth"
      ],
      skills: ["Product Leadership and Strategy", "Stakeholder Management", "Payment UX", "Revenue Analytics"]
    },
    {
      title: "Multimodal Transportation Integration",
      icon: `${import.meta.env.BASE_URL}Multimodal.png`,
      description: [
        "Pioneered unified QR ticketing and one-click UPI payments for multimodal journey",
        "Architected extensible backend and modular UI for scaling to 45L+ commuters",
        "Prototyped GPS/Bluetooth-enabled 'Pay as you go' and Smart Alerts for first/last-mile"
      ],
      skills: ["Mobility Systems", "Systems Architecture", "User Research", "Rapid AI Prototyping"]
    },
    {
      title: "Open Data Platform & Data Function",
      icon: `${import.meta.env.BASE_URL}OpenData.png`,
      description: [
        "Launched India's first mobility Open Data Dashboard end-to-end",
        "Led 14-member data team; drove 8x conversion, 2L+ rides/day, 70% driver retention"
      ],
      skills: ["Open Data", "Team Leadership", "Retention Metrics", "Dashboard Design"]
    },
    {
      title: "Core Feature Rollouts: Driver & Rider",
      icon: `${import.meta.env.BASE_URL}Nammayatri.jpg`,
      description: [
        "Built Matching Engine (+30% acceptance); Launched Yatri Points (+25% ARPDAU)",
        "Launched core rider flows—Repeat Ride, Pickup Hotspots, Reallocation (5K → 350K DAU)"
      ],
      skills: ["Conversion Optimisation", "Feature Design", "Behavioral Analytics", "Python", "SQL"]
    },
    {
      title: "Programmatic Demand & Ad Exchange",
      icon: `${import.meta.env.BASE_URL}Medianet.png`,
      description: [
        "Integrated TTD, Amazon, Baidu; scaled DSP spend from 0 to $50K+/day",
        "Improved cookie match by 10% across 30+ DSPs via publisher analytics",
        "Refined bidding via A/B testing—7% win rate boost, 15% CPM drop",
        // "Designed Contextual DMP for high-relevance inventory, improving Ad ROI"
      ],
      skills: ["Product Leadership", "AdTech", "DSP Integrations", "A/B Testing", "Targeting Strategy"]
    },
    {
      title: "UV Monitoring on Samsung Watch",
      icon: `${import.meta.env.BASE_URL}samsung.jpeg`,
      description: [
        "Developed UV exposure monitoring with proactive alerts; delivered end-to-end",
        "Secured PPO for productised concept, feature design, and delivery"
      ],
      skills: ["Embedded Systems", "Wearables UX", "HealthTech", "Alerting Systems"]
    },
    {
      title: "Resilient Load Balancer Deployment",
      icon: `${import.meta.env.BASE_URL}Jio.png`,
      description: [
        "Designed zero-downtime HAProxy deployment using TCP SYN and firewall rules",
        "Achieved >95% reliability handling IAM traffic in high-availability systems"
      ],
      skills: ["Deployment Engineering", "Networking Protocols", "Traffic Reliability"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <img src={project.icon} alt={project.title} className="w-8 h-8 rounded-full object-cover" />
                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {project.description.map((item, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1 text-xs">•</span>
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
