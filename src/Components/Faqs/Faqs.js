import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplyForm from "../ApplyForm/ApplyForm";
import { faqsRight, faqsImage } from "../../assets";
import "./Faqs.scss";

export default function Faqs({ language }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <main id="main-content">
      <img src={faqsRight} alt="no image" className="faqs-waves" />
      <img src={faqsRight} alt="no image" className="faqs-waves2" />
      <Container>
        <div className="content">
          <div className="main-content-top-section">
            <div className="left-section">
              <h1 className="title">
                {language === "english"
                  ? "Do you think you're investing your money correctly?"
                  : "هل تعتقد أنك تستثمر أموالك بشكل صحيح؟"}
              </h1>
              <h4 className="description">
                {language === "english"
                  ? "Answer quick questions to find out if investing suits you and meets your needs. Start now."
                  : "أجب على أسئلة سريعة لمعرفة ما إذا كان الاستثمار مناسبًا لك ويفي بحاجاتك. ابدأ الآن."}
              </h4>
            </div>
            <div className="right-section">
              <div className="video-container">
                <video
                  ref={videoRef}
                  style={{ zIndex: 1000, width: 500 }}
                  autoPlay
                  muted
                  controls
                  loop
                >
                  <source src="/footage1.mp4" />
                </video>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
          <div className="main-content-other-section">
            <Row className="align-items-center justify-content-center">
              <Col sm={6}>
                <h3 className="blue-heading text-center">
                  {language === "english"
                    ? "Just give me 5 minutes of your time..."
                    : "فقط أعطني 5 دقائق من وقتك..."}
                </h3>
              </Col>
              <Col sm={6} className="text-center">
                <ApplyForm language={language} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </main>
  );
}
