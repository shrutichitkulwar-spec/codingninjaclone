import { Button } from "@/components/ui/button";
import { CheckCircle, Play, ArrowRight } from "lucide-react";

const stats = [
  { value: "128%", label: "Average hike via placement cell" },
  { value: "1.5L+", label: "Learners cracked top companies" },
  { value: "1,400+", label: "Alumni in MAANG & unicorns" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              #1 Coding Education Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Get the tech career you deserve.{" "}
              <span className="gradient-text">Faster.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Join 1.5 Lac+ learners who've transformed their careers with our 
              industry-recognized programs and guaranteed placement support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-xl bg-card border border-border animate-slide-up stagger-${index + 1}`}
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle className="w-4 h-4 text-ninja-success" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="relative animate-slide-up stagger-2" style={{ opacity: 0 }}>
            <div className="glass-card rounded-3xl p-8 border border-border shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Find the right course for you
              </h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Experience Level</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option>Working Professional - Technical</option>
                    <option>Working Professional - Non Technical</option>
                    <option>College Student - Final Year</option>
                    <option>College Student - 1st to Pre-final Year</option>
                    <option>Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Topic of Interest</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option>Data Analytics</option>
                    <option>Data Science</option>
                    <option>Software Development</option>
                    <option>Generative AI</option>
                    <option>Full Stack Development</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+91"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Find Your Course
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
