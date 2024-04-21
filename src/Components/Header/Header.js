import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { HeaderLogo } from "../../assets";
import "./Header.scss";

export default function Header({ language, onLanguageChange }) {
  return (
    <header>
      <Container>
        <nav>
          <div className="header-logo">
            <img src={HeaderLogo} alt="Logo" />
          </div>
          <div className="header-text" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {language === "english" ? "Get a free consultation" : "احصل على استشارة مجانية"}
          </div>
          <Dropdown onSelect={onLanguageChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {language === "english" ? "English" : "العربية"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="english">English</Dropdown.Item>
              <Dropdown.Item eventKey="arabic">العربية</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </Container>
    </header>
  );
}
