import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* Section title */}
        <h1 className="contact-title">Contáctanos</h1>

        {/* Company intro */}
        <p className="contact-text">
          En <strong>Antes un Café</strong>, valoramos cada conversación tanto como valoramos cada taza de café.
        </p>

        {/* Phone contact */}
        <p className="contact-text">
          📞 Puedes llamarnos al <strong>+57 300 123 4567</strong> para consultas generales o pedidos especiales.
        </p>

        {/* Email contact */}
        <p className="contact-text">
          📧 Escríbenos a <strong>hola@antesuncafe.com</strong> y nuestro equipo te responderá lo antes posible.
        </p>

        {/* Location info */}
        <p className="contact-text">
          📍 Estamos ubicados en Bogotá, Colombia — ¡ven a disfrutar de una experiencia cafetera única!
        </p>

        {/* Social media note */}
        <p className="contact-text">
          También puedes encontrarnos en nuestras redes sociales como <strong>@antesuncafe</strong>.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

