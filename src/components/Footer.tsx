import { Code2, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  offerings: [
    { name: "Job Bootcamp", href: "#" },
    { name: "IIT Certifications", href: "#" },
    { name: "Self-Paced Courses", href: "#" },
    { name: "Interview Prep", href: "#" },
    { name: "Code Studio", href: "#" },
  ],
  courses: [
    { name: "Data Analytics", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "Full Stack Development", href: "#" },
    { name: "Generative AI", href: "#" },
    { name: "System Design", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Code Library", href: "#" },
    { name: "Interview Experiences", href: "#" },
    { name: "Campus Ambassador", href: "#" },
    { name: "Hiring Partners", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-bg">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Coding<span className="text-primary">Ninjas</span>
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-xs">
              India's leading coding education platform, helping 1.5L+ learners land their dream tech jobs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@codingninjas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Netaji Subhash Place, Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Our Offerings */}
          <div>
            <h4 className="font-semibold mb-4">Our Offerings</h4>
            <ul className="space-y-3">
              {footerLinks.offerings.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Coding Ninjas. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
