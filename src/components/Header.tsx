import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Code2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-bg">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Coding<span className="text-primary">Ninjas</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Our Offerings
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4 space-y-3">
                <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-semibold text-foreground">Job Bootcamp</div>
                  <div className="text-sm text-muted-foreground">Get placement-ready</div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-semibold text-foreground">IIT Certifications</div>
                  <div className="text-sm text-muted-foreground">Industry-recognized certificates</div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-semibold text-foreground">Self-Paced Courses</div>
                  <div className="text-sm text-muted-foreground">Learn at your own speed</div>
                </a>
              </div>
            </div>
          </div>
          <a href="#courses" className="nav-link">Courses</a>
          <a href="#success" className="nav-link">Success Stories</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Events</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm">Login</Button>
          <Button variant="hero" size="default">Sign Up Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-slide-up">
          <nav className="container mx-auto py-6 px-4 space-y-4">
            <a href="#" className="block py-2 nav-link">Our Offerings</a>
            <a href="#courses" className="block py-2 nav-link">Courses</a>
            <a href="#success" className="block py-2 nav-link">Success Stories</a>
            <a href="#" className="block py-2 nav-link">Resources</a>
            <a href="#" className="block py-2 nav-link">Events</a>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1">Login</Button>
              <Button variant="hero" className="flex-1">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
