import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, ArrowRight, GraduationCap } from "lucide-react";
import { coursesData } from "@/data/courses";

const tabs = ["All", "Data Analytics", "Generative AI", "Software Development", "Data Science"];

const courses = coursesData.map(course => ({
  slug: course.slug,
  title: course.title,
  partner: course.partner,
  badge: course.badge,
  duration: course.duration,
  category: course.category,
  image: course.image,
  featured: course.featured,
}));

const Courses = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = activeTab === "All" 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="section-title mb-4">
            Industry-Leading <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose from our range of programs designed to accelerate your career in tech
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "gradient-bg text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Link 
              key={index}
              to={`/course/${course.slug}`}
              className="course-card group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {course.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    <Award className="w-3 h-3" />
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Partner */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">{course.partner}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <span className="text-primary font-medium text-sm flex items-center gap-1">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
