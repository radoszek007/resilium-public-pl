import { AudienceSection } from "@/components/AudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstructorSection } from "@/components/InstructorSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ScenariosSection } from "@/components/ScenariosSection";
import { WhySection } from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <BenefitsSection />
        <HowItWorksSection />
        <AudienceSection />
        <ProgramsSection />
        <OutcomesSection />
        <DifferenceSection />
        <ScenariosSection />
        <InstructorSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
