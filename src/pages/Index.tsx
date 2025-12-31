import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReboquesSection from "@/components/ReboquesSection";
import VantagensSection from "@/components/VantagensSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Júlio Reboques — Aluguel de Reboques em Porto Alegre</title>
        <meta name="description" content="Aluguel de reboques em Porto Alegre. Reboques abertos e fechados para mudanças, viagens e transporte de cargas. Ligue: (51) 3022-2995" />
        <link rel="canonical" href="https://julioreboques.com.br/" />
        {/* Open Graph */}
        <meta property="og:title" content="Júlio Reboques — Aluguel de Reboques em Porto Alegre" />
        <meta property="og:description" content="Aluguel de reboques em Porto Alegre. Reboques abertos e fechados para mudanças, viagens e transporte de cargas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://julioreboques.com.br/" />
        <meta property="og:image" content="https://julioreboques.com.br/placeholder.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Júlio Reboques — Aluguel de Reboques" />
        <meta name="twitter:description" content="Aluguel de reboques em Porto Alegre. Qualidade e preço justo." />
        <meta name="twitter:image" content="https://julioreboques.com.br/placeholder.svg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Júlio Reboques",
          "url": "https://julioreboques.com.br",
          "telephone": "+55 51 3022-2995",
          "image": "https://julioreboques.com.br/placeholder.svg",
          "priceRange": "R$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "addressCountry": "BR"
          }
        }`}</script>
      </Helmet>
      <Header />
      <main id="main-content">
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
