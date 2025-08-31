import FeaturesSection from "@/page-components/FeatureSection";
import Footer from "@/page-components/Footer";
import HeroSection from "@/page-components/HeroSection";
import HowItWorks from "@/page-components/HowItWorks";
import Navigation from "@/page-components/Navigation";
import RegistrationForm from "@/page-components/RegisterForm";
import TrustedBySection from "@/page-components/TrustedSection";
import FAQSection from "@/page-components/FAQSection";
import CEOSection from "@/page-components/CEOSection";

export default function HomePage() {
  const scrollToRegistration = () => {
    const element = document.querySelector("#registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <CEOSection />
      <div id="registration">
        <RegistrationForm />
      </div>
      <FAQSection />
      <TrustedBySection />
      <Footer />
    </main>
  );
}
