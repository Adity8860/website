import React from "react";
import "../Footer/Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instaIcon from "../Assets/instagram_icon.png";
import pintestIcon from "../Assets/pintester_icon.png";
import whatappIcon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Jupitar</p>
      </div>
      <ul className="footer-links">
        <li>Company </li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instaIcon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintestIcon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatappIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
