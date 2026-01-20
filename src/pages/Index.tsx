import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import LearningModel from "@/components/LearningModel";
import SuccessStories from "@/components/SuccessStories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Courses />
        <LearningModel />
        <SuccessStories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
