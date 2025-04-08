import React, { useState } from "react";
import "./ProfileContainer.css";

import logoUrl from "../../assets/images/logo.jpg";
import mailUrl from "../../assets/vectors/mail.svg";
import githubUrl from "../../assets/vectors/github.svg";
import linkedinUrl from "../../assets/vectors/linkedin.svg";
import phoneUrl from "../../assets/vectors/phone.svg";
import tickUrl from "../../assets/vectors/tick.svg";

import { isMobile } from 'react-device-detect';

const ProfileContainer: React.FC = () => {

  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    if (isMobile) {
      window.location.href = "tel:+61416202431";
      return;
    }

    navigator.clipboard.writeText("+61 416 202 431").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="profile-container">
      <a className="profile-image unselectable" href="/">
        <img src={logoUrl} alt="Profile" draggable="false" />
      </a>
      <div className="profile-content">
        <h1>Bryson Camp</h1>
        <h2>Junior Full Stack Developer</h2>
        <div className="profile-links"> 
          <a className="profile-link" href="mailto:bryson@bryson.camp">
            <img className="unselectable" src={mailUrl} alt="Mail" style={{height: "1.675rem", marginBottom: "0.125rem"}} draggable="false"/>
          </a>
          <a className="profile-link" href="https://github.com/brysoncamp" target="_blank" rel="noreferrer">
            <img className="unselectable" src={githubUrl} alt="GitHub" style={{height: "1.375rem"}} />
          </a>
          <a className="profile-link" href="https://www.linkedin.com/in/brysoncamp/" target="_blank" rel="noreferrer">
            <img className="unselectable" src={linkedinUrl} alt="LinkedIn" style={{height: "1.875rem", marginTop: "0.125rem"}} draggable="false"/>
          </a>
          <div className="profile-link-divider"></div>
          <div className="profile-link" onClick={handlePhoneClick}>
            <img className="unselectable" src={phoneUrl} alt="Phone" style={{height: "1.75rem", marginTop: "0.25rem"}} draggable="false" />
            <div className="phone-number">0416 202 431</div>
            <div className={`copied-button ${copied ? "copied-visible" : ""}`}>
              <img src={tickUrl} alt="Copied" draggable="false" />
              Copied
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;