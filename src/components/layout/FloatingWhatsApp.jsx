import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = "8885099940";
  const defaultMessage = encodeURIComponent("Hello! I'm interested in booking a cab/tour.");

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
