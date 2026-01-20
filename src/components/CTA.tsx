import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-6">
            <Zap className="w-4 h-4" />
            Limited Time Offer
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-background mb-6">
            Start Your Tech Journey <span className="text-primary">Today</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
            Get early access to our new courses with exclusive discounts. 
            Join 1.5 Lac+ learners who've already transformed their careers.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50%</div>
              <div className="text-sm text-background/60">Scholarship Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">0%</div>
              <div className="text-sm text-background/60">EMI Options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-background/60">Placement Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              Explore All Courses
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background/30 text-background hover:bg-background hover:text-foreground"
            >
              Book a Free Counselling
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-background/50">
            Trusted by students from IITs, NITs, and top colleges across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
