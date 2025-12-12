import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5551998184976";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-brand-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Júlio Reboques" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Há mais de 10 anos oferecendo soluções em aluguel de reboques em Porto Alegre. 
              Qualidade, segurança e atendimento personalizado para você transportar suas cargas com tranquilidade.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-brand-gold mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:5130222995" 
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-brand-gold transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>(51) 3022-2995</span>
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-brand-gold transition-colors"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <span>(51) 99818-4976</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-brand-gold mb-6">
              Localização
            </h3>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <div>
                <p>Rua Conselheiro Travassos, 185</p>
                <p>Bairro São Geraldo</p>
                <p>Porto Alegre - RS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} Júlio Reboques. Todos os direitos reservados.</p>
            <p>Porto Alegre - Rio Grande do Sul</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
