import React, { useState } from "react";
import "./StackSection.css";

const stackItems = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "DynamoDB", "AWS"];

const AboutSection: React.FC = () => {
  const [activeItems, setActiveItems] = useState<{ [key: number]: boolean }>({});

  const toggleClass = (index: number) => {
    setActiveItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="stack-section">
      <h5 className="heading stack-heading">Stack</h5>
      <div className="stack-items">
        {stackItems.map((item, index) => (
          <div
            key={index}
            className={`stack-item unselectable ${activeItems[index] ? "stack-item-active" : ""}`}
            onClick={() => toggleClass(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
