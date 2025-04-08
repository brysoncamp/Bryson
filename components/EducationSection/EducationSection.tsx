import React from "react";
import "./EducationSection.css";

import arrowUrl from "../../assets/vectors/arrow.svg";

const EducationSection: React.FC = () => {
  return (
    <div className="education-section">
      <h5 className="heading education-heading">Education</h5>
      <p className="education-years">2022 - 2025</p>
      <p>Bachelor of Computer Science (Cloud & Mobile)</p>
      <p className="university">University of the Sunshine Coast</p>
      <a href="/transcript.pdf" target="_blank" className="transcript-link">
        Cumulative GPA: <b>6.70</b>
        <img src={arrowUrl} alt="arrow" className="arrow-icon" />
      </a>
      <p className="recipient">Recipient of Medal for Academic Excellence</p>
    </div>
  );
};

export default EducationSection;