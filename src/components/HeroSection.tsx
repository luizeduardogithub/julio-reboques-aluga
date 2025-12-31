import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const whatsappNumber = "5551998184976";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel de reboques.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <img
              src={logo}
              alt="Júlio Reboques"
              className="h-40 md:h-56 w-auto mx-auto drop-shadow-2xl"
              decoding="async"
              loading="eager"
            />
          </div>

          {/* Headline */}
          <h1 
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Aluguel de Reboques em{" "}
            <span className="text-gradient">Porto Alegre</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Transporte suas cargas com segurança e praticidade. 
            Reboques de qualidade para mudanças, viagens e muito mais!
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#reboques">
                Ver Reboques Disponíveis
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">10+</p>
              <p className="text-sm text-primary-foreground/70">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">500+</p>
              <p className="text-sm text-primary-foreground/70">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">100%</p>
              <p className="text-sm text-primary-foreground/70">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#reboques" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-brand-gold transition-colors animate-bounce-subtle"
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
