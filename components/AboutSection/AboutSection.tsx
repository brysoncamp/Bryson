import React from "react";

import "./AboutSection.css";

const AboutSection: React.FC = () => {

  return (
    <>
      <div className="about-section">
        <h5 className="heading about-heading">About</h5>
        <p className="about-description">
          Hi, I'm Bryson. I love building creative web applications, focusing on intuitive user experiences and scalable back-end systems. I'm passionate about AI-powered solutions and developing innovative products that create value for users.
        </p>
        <p className="about-current">Junior JavaScript Developer <a href="https://zudello.com" target="_blank" rel="noopener noreferrer" className="about-company"><span className="about-company-at">@</span>Zudello</a></p>
      </div>
    </>
  );
};

export default AboutSection; 