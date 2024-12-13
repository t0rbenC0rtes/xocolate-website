import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact">
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
  );
};

export default Contact;
