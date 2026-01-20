import { BookOpen, Trophy, Sparkles, Target, Users, Briefcase } from "lucide-react";

const stages = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Master fundamentals through structured curriculum, live classes, and hands-on projects",
    features: ["Live Interactive Classes", "Industry-Relevant Projects", "Doubt Resolution 24/7"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Trophy,
    title: "Excel",
    description: "Build expertise with advanced concepts, coding contests, and real-world applications",
    features: ["Mock Interviews", "Coding Contests", "Peer Learning Groups"],
    color: "from-primary to-[hsl(var(--ninja-gradient-end))]",
  },
  {
    icon: Sparkles,
    title: "Stand Out",
    description: "Get noticed by top companies with placement prep and industry connections",
    features: ["Resume Building", "Job Referrals", "Guaranteed Placements"],
    color: "from-green-500 to-green-600",
  },
];

const advantages = [
  { icon: Target, title: "Placement Focused", description: "Programs designed for job outcomes" },
  { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals" },
  { icon: Briefcase, title: "Career Support", description: "Lifetime placement assistance" },
];

const LearningModel = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="section-title mb-4">
            3-Stage <span className="gradient-text">Learning Model</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven methodology that transforms beginners into industry-ready professionals
          </p>
        </div>

        {/* 3 Stages */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground border border-border">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stage.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{stage.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{stage.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {stage.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Connector Line (visible on md+) */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Coding Ninjas Advantage */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              The Coding Ninjas <span className="gradient-text">Advantage</span>
            </h3>
            <p className="text-muted-foreground">Why 1.5 Lac+ learners choose us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModel;
