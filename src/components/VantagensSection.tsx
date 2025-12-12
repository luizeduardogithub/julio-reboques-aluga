import { Shield, Clock, ThumbsUp, Wrench, MapPin, Headphones } from "lucide-react";

const vantagens = [
  {
    icon: Shield,
    titulo: "Segurança Garantida",
    descricao: "Reboques revisados e em perfeitas condições para sua tranquilidade.",
  },
  {
    icon: Clock,
    titulo: "Reserva Rápida",
    descricao: "Faça sua reserva pelo WhatsApp de forma simples e rápida.",
  },
  {
    icon: ThumbsUp,
    titulo: "Preço Justo",
    descricao: "Valores competitivos com a melhor relação custo-benefício.",
  },
  {
    icon: Wrench,
    titulo: "Manutenção em Dia",
    descricao: "Equipamentos sempre prontos e bem conservados para uso imediato.",
  },
  {
    icon: MapPin,
    titulo: "Localização Central",
    descricao: "Fácil acesso no bairro São Geraldo em Porto Alegre.",
  },
  {
    icon: Headphones,
    titulo: "Suporte Completo",
    descricao: "Orientação sobre uso e atendimento sempre disponível.",
  },
];

const VantagensSection = () => {
  return (
    <section id="vantagens" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Por Que Escolher a{" "}
            <span className="text-gradient">Júlio Reboques</span>?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Há mais de 10 anos oferecendo qualidade e confiança no aluguel de reboques.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {vantagens.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-brand-gold/50 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                <item.icon className="h-7 w-7 text-brand-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-2">
                {item.titulo}
              </h3>
              <p className="text-primary-foreground/70">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VantagensSection;
