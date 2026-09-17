import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919676658686"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full" />
  </a>
);

export default WhatsAppButton;
