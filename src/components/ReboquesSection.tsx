import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Check, Truck } from "lucide-react";
import reboqueAberto from "@/assets/reboque-aberto.webp";
import reboqueFechado from "@/assets/reboque-fechado.jpeg";

const reboques = [
  {
    id: 1,
    nome: "Reboque Aberto",
    descricao: "Ideal para transporte de móveis, materiais de construção, jardinagem e cargas em geral.",
    imagem: reboqueAberto,
    caracteristicas: [
      "Fácil carregamento lateral",
      "Ideal para cargas grandes",
      "Perfeito para mudanças",
      "Excelente ventilação",
    ],
    whatsappMessage: "Olá! Gostaria de alugar o Reboque Aberto.",
  },
  {
    id: 2,
    nome: "Reboque Baú Fechado",
    descricao: "Proteção total contra chuva e sol. Perfeito para viagens, transporte de eletrônicos e objetos delicados.",
    imagem: reboqueFechado,
    caracteristicas: [
      "Proteção contra intempéries",
      "Segurança para objetos",
      "Bagageiro no teto",
      "Ideal para viagens longas",
    ],
    whatsappMessage: "Olá! Gostaria de alugar o Reboque Baú Fechado.",
  },
];

const ReboquesSection = () => {
  const whatsappNumber = "5551998184976";

  return (
    <section id="reboques" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold-dark px-4 py-2 rounded-full mb-4">
            <Truck className="h-4 w-4" />
            <span className="text-sm font-medium">Nossos Reboques</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Escolha o Reboque Ideal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temos opções para diferentes necessidades. Clique no botão para fazer sua reserva via WhatsApp.
          </p>
        </div>

        {/* Reboques Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reboques.map((reboque, index) => (
            <Card 
              key={reboque.id} 
              className="overflow-hidden border-2 border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={reboque.imagem} 
                  alt={reboque.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
                  {reboque.nome}
                </h3>
              </div>

              <CardContent className="p-6">
                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {reboque.descricao}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {reboque.caracteristicas.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <span className="flex-shrink-0 w-5 h-5 bg-brand-gold/20 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-gold-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reboque.whatsappMessage)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Alugar pelo WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReboquesSection;
