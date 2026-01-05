import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ModelsSection from "@/components/ModelsSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      <Header />
      
      <main className="pt-24 md:pt-32">
        <HeroSection />
        <ManifestoSection />
        <ModelsSection />
        <ProcessSection />
        <FounderSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
