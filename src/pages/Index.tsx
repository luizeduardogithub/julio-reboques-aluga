import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReboquesSection from "@/components/ReboquesSection";
import VantagensSection from "@/components/VantagensSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ReboquesSection />
        <VantagensSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
