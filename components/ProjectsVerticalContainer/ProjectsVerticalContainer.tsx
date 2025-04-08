import React, { useRef, useEffect, useState } from "react";
import "./ProjectsVerticalContainer.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

import { isMobile } from "react-device-detect";

import tapUrl from "../../assets/vectors/touch.svg";

type ProjectName = "cheapchat" | "pyfiddle" | "namescraper";

type ProjectsVerticalContainerProps = {
  expandedProject: ProjectName | null;
  setExpandedProject: React.Dispatch<React.SetStateAction<ProjectName | null>>;
};

const ProjectsVerticalContainer: React.FC<ProjectsVerticalContainerProps> = ({
  expandedProject,
  setExpandedProject,
}) => {
  const cheapchatRef = useRef<HTMLDivElement>(null);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (expandedProject && cheapchatRef.current) {
      cheapchatRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleClick = (project: string) => {
    const normalized = project.toLowerCase() as ProjectName;
    setExpandedProject(normalized);
    setHasClicked(true); // mark as clicked

    if (cheapchatRef.current) {
      cheapchatRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    history.pushState({}, "", `/${normalized}`);
    document.title = `Bryson Camp | ${project} Project`;

    console.log(`Toggled project: ${normalized}`);
  };

  const handleClose = () => {
    console.log("Close button clicked");
    setExpandedProject(null);
  };

  return (
    <div className="projects-vertical-section">
      <h5 className="heading projects-vertical-heading">Projects</h5>
      {isMobile && <p className="tap-heading">• Tap to expand</p>}
      {isMobile && !hasClicked && (
        <div className="tap-icon-container">
          <img className="tap-icon" src={tapUrl} alt="Tap" />
        </div>
      )}

      <ProjectDetails
        ref={cheapchatRef}
        project="CheapChat"
        className={`project 
          ${expandedProject === "cheapchat" ? "project-vertical-expanded" : "project-vertical-collapsed"}
          ${!isMobile ? "project-vertical-expanded-non-mobile" : ""}
        `}
        handleClick={handleClick}
        expanded={expandedProject === "cheapchat"}
        isVertical={true}
        handleClose={handleClose}
        top="-3.5rem"
      />

      <ProjectDetails
        project="PyFiddle"
        className={`project 
          ${expandedProject === "pyfiddle" ? "project-vertical-expanded" : "project-vertical-collapsed"}
          ${!isMobile ? "project-vertical-expanded-non-mobile" : ""}
        `}
        handleClick={handleClick}
        expanded={expandedProject === "pyfiddle"}
        isVertical={true}
        handleClose={handleClose}
        top="7rem"
      />

      <ProjectDetails
        project="Namescraper"
        className={`project 
          ${expandedProject === "namescraper" ? "project-vertical-expanded" : "project-vertical-collapsed"}
          ${!isMobile ? "project-vertical-expanded-non-mobile" : ""}
        `}
        handleClick={handleClick}
        expanded={expandedProject === "namescraper"}
        isVertical={true}
        handleClose={handleClose}
        top="17.5rem"
      />
    </div>
  );
};

export default ProjectsVerticalContainer;
