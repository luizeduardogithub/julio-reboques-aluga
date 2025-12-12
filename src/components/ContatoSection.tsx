import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const ContatoSection = () => {
  const whatsappNumber = "5551998184976";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel de reboques.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const enderecoGoogle = encodeURIComponent("Rua Conselheiro Travassos, 185, São Geraldo, Porto Alegre, RS");

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato para fazer sua reserva!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <Card className="border-2 hover:border-brand-gold/50 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    Telefone Fixo
                  </h3>
                  <a 
                    href="tel:5130222995" 
                    className="text-xl font-medium text-brand-blue hover:text-brand-gold transition-colors"
                  >
                    (51) 3022-2995
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ligue para informações e reservas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-2 hover:border-brand-gold/50 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-brand-blue hover:text-brand-gold transition-colors"
                  >
                    (51) 99818-4976
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Atendimento rápido e reservas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border-2 hover:border-brand-gold/50 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="text-foreground font-medium">
                    Rua Conselheiro Travassos, 185
                  </p>
                  <p className="text-muted-foreground">
                    Bairro São Geraldo - Porto Alegre/RS
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${enderecoGoogle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-gold transition-colors mt-2"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-2 hover:border-brand-gold/50 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-foreground">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-foreground">
                    Sábado: 8h às 12h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px]">
            <Card className="h-full border-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.367!2d-51.2088!3d-30.0277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAxJzM5LjciUyA1McKwMTInMzEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Júlio Reboques"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Fale Conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
