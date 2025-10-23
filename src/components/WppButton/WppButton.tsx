"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5515991867481&text=Ol%C3%A1%21+%0AGostaria+de+uma+consultoria+%E2%9A%96"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
      <span className="absolute inline-flex h-16 w-16 rounded-full border-5 border-green-300 animate-borderPulse"></span>

      <FaWhatsapp className="w-7 h-7 z-10" />
    </a>
  );
}
