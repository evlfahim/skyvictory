import React from "react";
import { Container } from "react-bootstrap";
import { footerLogo } from "../../assets";
import "./Footer.scss";

export default function Footer({ language }) {
  return (
    <footer id="home-footer">
      <Container>
        <div className="content">
          <div className="footer-logo">
            <img src={footerLogo} alt="Logo" />
          </div>
          <div className="footer-text">
            {language === "english"
              ? "Sky Victory Real Estate Management"
              : "انضم الى سكاي فيكتوري لإدارة العقارات"}
          </div>
          <p>
            {language === "english"
              ? "Get a free consultation"
              : "احصل على استشارة مجانية"}
            <br />
            &copy; {new Date().getFullYear()}, Sky Victory
          </p>
          <p>
            {language === "english"
              ? "Rayah Office Building Office 1203"
              : "مبنى مكتب راية، مكتب 1203"}
            <br />
            {language === "english"
              ? "Binaydir St - Al Zahiyah"
              : "شارع بن يدير - الزاهية"}
            <br />
            {language === "english"
              ? "E13 - Abu Dhabi - UAE"
              : "أبوظبي - الإمارات العربية المتحدة"}
          </p>
          <p>
            {language === "english"
              ? "Created by "
              : "تم الإنشاء بواسطة "}
            <a href="https://main--fahimbinlokman.netlify.app/" target="_blank" rel="noopener noreferrer">
              Fahim Bin Lokman
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
