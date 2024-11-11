import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="cdiv">
      <div className="contactcontainer">
        <div>
          <h3>İletişim</h3>
          <p>Bana aşağıdaki iletişim kanallarından ulaşabilirsiniz.</p>
        </div>
        <div>
          <SiGmail id="mail" /> : ozanakgon1@gmail.com
          <BsFillTelephoneFill id="tel" /> : +90 500 000 00 00
        </div>
      </div>
    </div>
  );
}

export default Contact;
