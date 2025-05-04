import React from "react";
import "./ExperienceSection.css";

const ExperienceSection: React.FC = () => {
  return (
    <div className="education-section">
      <h5 className="heading education-heading">Experience</h5>
      <p className="education-years">2025 - Present</p>
      <p>Junior JavaScript Developer</p>
      <p className="university">Zudello Pty Ltd</p>
      <br /><br />
      <p className="education-years">2023 - 2025</p>
      <p>Accounts Payable Officer</p>
      <p className="university">Vikcon Construction Services</p>
      <p className="experience-list">Processed invoices <span className="dot">•</span> Managed accounts email <span className="dot">•</span> Reconciled  transactions <span className="dot">•</span>  Handled vendor communication</p>
    </div>
  );
};

export default ExperienceSection;