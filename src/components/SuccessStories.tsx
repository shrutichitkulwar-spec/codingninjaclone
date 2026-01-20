import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    quote: "Coding Ninjas transformed my career. From a non-tech background to landing my dream job at Google - the structured curriculum and placement support made it possible.",
    hike: "200%",
    previousRole: "Marketing Associate",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    quote: "The Data Science program was exactly what I needed. The practical projects and interview prep helped me crack Amazon in just 6 months.",
    hike: "150%",
    previousRole: "Business Analyst",
  },
  {
    name: "Sneha Patel",
    role: "Full Stack Developer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    quote: "Best investment I've made in my career. The mentors are industry experts and the curriculum is always up-to-date with latest technologies.",
    hike: "180%",
    previousRole: "Junior Developer",
  },
  {
    name: "Amit Kumar",
    role: "ML Engineer",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    quote: "From a tier-3 college to Meta - it still feels surreal. The placement cell's dedication is unmatched.",
    hike: "250%",
    previousRole: "Fresher",
  },
];

const companyLogos = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="section-title mb-4">
            From <span className="gradient-text">Learners</span> to Leaders
          </h2>
          <p className="section-subtitle mx-auto">
            Join the community of professionals who've transformed their careers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl overflow-hidden">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 px-3 py-1 gradient-bg text-primary-foreground text-sm font-bold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {testimonials[currentIndex].hike}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary font-semibold">{testimonials[currentIndex].role} @ {testimonials[currentIndex].company}</p>
                  <p className="text-sm text-muted-foreground">Previously: {testimonials[currentIndex].previousRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Our alumni work at top companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
