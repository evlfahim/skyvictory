import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Faqs from "../../Components/Faqs/Faqs";
import Hosts from "../../Components/Hosts/Hosts";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

export default function Home() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Faqs language={language} />
      <Hosts language={language} />
      <Footer language={language} />
    </>
  );
}
