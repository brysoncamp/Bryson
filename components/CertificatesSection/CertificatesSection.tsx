import React from "react";
import "./CertificatesSection.css";

import arrowUrl from "../../assets/vectors/arrow.svg";

const certificatesItems = [
  {
    title: "AI-900: Azure",
    path: "/ai-900.pdf"
  },
  {
    title: "DP-900: Azure",
    path: "/dp-900.pdf"
  },
  {
    title: "Databases: ITS",
    path: "/databases.pdf"
  },
  {
    title: "JavaScript: ITS",
    path: "/javascript.pdf"
  }
];
    
const CertificatesSection: React.FC = () => {
  return (
    <div className="education-section">
      <h5 className="heading">Certificates</h5>
      <div className="certificate-items">
        {certificatesItems.map((item, index) => (
          <a 
            key={index}
            href={item.path}
            target="_blank"
            className="certificate-item unselectable"
          >
            {item.title}
            <img src={arrowUrl} alt="arrow" className="certificate-arrow-icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;