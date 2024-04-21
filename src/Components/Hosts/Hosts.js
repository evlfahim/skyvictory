import React from "react";
import { Container } from "react-bootstrap";
import "./Hosts.scss";
 import { john, anton } from "../../assets";

export default function Hosts({ language }) {
  return (
    <section id="hosts">
      <Container>
        <h2 className="title">
          {language === "english" ? "About the Hosts" : "عن المضيفين"}
        </h2>
        <div className="persons">
          <div className="person">
            <div>
              <h5 className="name">
                {language === "english" ? "Abdallah Hejji" : "عبد الله حجي"}
              </h5>
              <p className="department">
                {language === "english" ? "CEO" : "الرئيس التنفيذي"}
              </p>
            </div>
             <img src={john} alt="John" />
          </div>
          {/* <div className="person">
            <img src={anton} alt="Anton" />
            <div>
              <h5 className="name">
                {language === "english" ? "Anton Berger" : "أنطون بيرغر"}
              </h5>
              <p className="department">
                {language === "english" ? "Technical account manager" : "مدير الحساب التقني"}
              </p>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
