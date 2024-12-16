import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1>CONTACT</h1>
        <div className="contact-item">
          <MdOutlinePlace className="contact-icon" />
          <span>Rue Auguste Lambiotte 65, 1030 Bruxelles</span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>0475 22 07 91</span>
        </div>
        <div className="contact-item">
          <CiMail className="contact-icon" />
          <span>Xavier@Xocolate.be</span>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6545.926718994237!2d4.386606612813955!3d50.85573417155435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c35cc1f14ee1%3A0x38f1dd888fc6671!2sRue%20Auguste%20Lambiotte%2065%2C%201030%20Schaerbeek!5e1!3m2!1sfr!2sbe!4v1734345278683!5m2!1sfr!2sbe"
          width="300"
          height="200"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
