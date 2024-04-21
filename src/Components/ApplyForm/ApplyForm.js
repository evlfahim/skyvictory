import React from "react";
import "./ApplyForm.scss";

export default function ApplyForm({ language }) {
  return (
    <form id="formapply">
      <h4 className="title">
        {language === "english"
          ? "Please answer the questions along with your small details"
          : "يرجى الإجابة على الأسئلة مع تفاصيلك الصغيرة"}
      </h4>
      <div className="form-group">
  <div>
    <label htmlFor="video_seen">
      {language === "english" ? "1- Have you seen the video?" : "١- هل شاهدت الفيديو؟"}
    </label>
    <input type="text" id="video_seen" />
  </div>
  <div>
    <label htmlFor="thought_invest">
      {language === "english" ? "2- Have you ever thought of investing in real estate?" : "٢- هل فكرت يومًا في الاستثمار في العقارات؟"}
    </label>
    <input type="text" id="thought_invest" />
  </div>
  <div>
    <label htmlFor="dive_invest">
      {language === "english" ? "3- Are you ready to dive into real estate investment?" : "٣- هل أنت مستعد للغوص في استثمارات العقارات؟"}
    </label>
    <input type="text" id="dive_invest" />
  </div>
  <div>
    <label htmlFor="name">{language === "english" ? "Full Name" : "الاسم الكامل"}</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label htmlFor="phone">{language === "english" ? "Phone" : "الهاتف"}</label>
    <input type="text" id="phone" />
  </div>
  <div>
    <label htmlFor="email">{language === "english" ? "Email" : "البريد الإلكتروني"}</label>
    <input type="email" id="email" />
  </div>
  <input
    type="submit"
    value={language === "english" ? "Apply to participate" : "قدم للمشاركة"}
    className="submitbtn"
  />
</div>

    </form>
  );
}
