import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5551998184976";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel de reboques.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-105 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-bounce-subtle" />
      <span className="hidden sm:inline font-medium">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppFloat;
