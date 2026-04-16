import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LevelsSection } from "@/components/LevelsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LevelsSection />
      <SpeakersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
