import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface EnrollmentFormProps {
  courseName: string;
}

const EnrollmentForm = ({ courseName }: EnrollmentFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="bg-ninja-success/10 rounded-2xl p-8 text-center border border-ninja-success/20">
        <CheckCircle className="w-12 h-12 text-ninja-success mx-auto mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground text-sm">
          Our counselor will contact you within 24 hours to discuss your enrollment.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-bold text-foreground mb-4">
        Get a Free Counselling
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Speak to our expert counselors about {courseName}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder="Your Name"
            required
            className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email Address"
            required
            className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Phone Number"
            required
            className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <select 
            required
            className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select Experience Level</option>
            <option>Working Professional</option>
            <option>College Student</option>
            <option>Fresher</option>
            <option>Career Changer</option>
          </select>
        </div>

        <Button variant="hero" size="lg" className="w-full">
          Request Callback
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
};

export default EnrollmentForm;
