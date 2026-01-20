import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Clock, Calendar, Award, Users, Star, 
  CheckCircle, Play, Download, ChevronDown, Briefcase,
  BookOpen, Code, Target, Zap
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";
import { coursesData } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const [openModule, setOpenModule] = useState<number | null>(0);
  
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {course.badge}
                </span>
                <span className="px-3 py-1 bg-background/10 text-background rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {course.rating} ({course.reviews} reviews)
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                {course.title}
              </h1>

              <p className="text-lg text-background/70">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{course.enrolled}+ Enrolled</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="xl">
                  Enroll Now
                  <Zap className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Play className="w-5 h-5" />
                  Watch Intro
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={course.image}
                alt={course.title}
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card text-foreground rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold gradient-text">{course.placement}%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {course.highlights.map((highlight, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center border border-border">
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{highlight.value}</div>
                <div className="text-sm text-muted-foreground">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Curriculum & Instructors */}
            <div className="lg:col-span-2 space-y-12">
              {/* Curriculum */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Course <span className="gradient-text">Curriculum</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  {course.curriculum.description}
                </p>

                <div className="space-y-4">
                  {course.curriculum.modules.map((module, index) => (
                    <div key={index} className="border border-border rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenModule(openModule === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 bg-card hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold text-foreground">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">{module.lessons} lessons • {module.duration}</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openModule === index ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openModule === index && (
                        <div className="p-6 pt-0 bg-card">
                          <ul className="space-y-3 pt-4 border-t border-border">
                            {module.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-ninja-success flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="mt-6">
                  <Download className="w-4 h-4" />
                  Download Full Syllabus
                </Button>
              </div>

              {/* Instructors */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Learn from <span className="gradient-text">Industry Experts</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <img 
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground">{instructor.name}</h3>
                          <p className="text-sm text-primary font-medium">{instructor.role}</p>
                          <p className="text-sm text-muted-foreground mt-1">{instructor.company}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mt-4">{instructor.bio}</p>
                      <div className="flex items-center gap-4 mt-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {instructor.experience}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {instructor.students} students
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What You'll <span className="gradient-text">Learn</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {course.learnings.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-ninja-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Pricing & Enrollment */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
                  <div className="text-center mb-6">
                    <div className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</div>
                    <div className="text-4xl font-extrabold text-foreground">
                      ₹{course.price.toLocaleString()}
                    </div>
                    <div className="inline-block px-3 py-1 bg-ninja-success/10 text-ninja-success rounded-full text-sm font-semibold mt-2">
                      Save ₹{(course.originalPrice - course.price).toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-ninja-success" />
                      <span>Lifetime access to course</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-ninja-success" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-ninja-success" />
                      <span>24/7 doubt support</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-ninja-success" />
                      <span>Placement assistance</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-ninja-success" />
                      <span>{course.projects}+ hands-on projects</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full mb-4">
                    Enroll Now
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    EMI starting from ₹{Math.round(course.price / 12).toLocaleString()}/month
                  </p>
                </div>

                {/* Enrollment Form */}
                <EnrollmentForm courseName={course.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {course.faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
