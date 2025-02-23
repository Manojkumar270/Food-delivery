import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footr-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing ddvsfffsd elit.
            Unde magni repellat, obcaecati illo quibusdam vitae. Illo possimus
            ullam placeat. Quisquam fugiat repellendus iusto soluta voluptatum
            hic suscipit magni animi explicabo.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>8779876665786</li>
            <li>contact@Tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 © Tomato.com -All Right Reserved</p>
    </div>
  );
};

export default Footer;
