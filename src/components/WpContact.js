import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppContact = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <div className="content container">
      <button onClick={() => setShowWhatsApp(!showWhatsApp)} >
        <WhatsAppIcon color="success" sx={{ fontSize: 100 }} />
      </button>
      {showWhatsApp && (
        <div>
          {/* Your WhatsApp contact details */}
          <p>WhatsApp: +57 (320) 409-5508</p>
          <p>Email: antesuncafe@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default WhatsAppContact; 
