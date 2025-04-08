import React, { useState } from "react";
import "./ProjectsContainer.css";

import ProjectDetails from "../ProjectDetails/ProjectDetails";

type ProjectState = "CheapChat" | "PyFiddle" | "Namescraper";

interface ProjectsContainerProps {
  initialExpanded: ProjectState;
  initialCollapsedLeft: ProjectState;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ initialExpanded, initialCollapsedLeft }) => {
  const [expanded, setExpanded] = useState<ProjectState>(initialExpanded);
  const [collapsedLeft, setCollapsedLeft] = useState<ProjectState>(initialCollapsedLeft);

  const handleClick = (project: ProjectState) => {
    if (project === collapsedLeft) setCollapsedLeft(expanded);
    setExpanded(project);
    history.pushState({}, "", `/${project.toLowerCase()}`);
    document.title = `Bryson Camp | ${project} Project`;
  }

  const getPositionClass = (project: ProjectState) => {
    if (project === expanded) return "project-expanded";
    if (project === collapsedLeft) return "project-collapsed collapsed-left";

    return "project-collapsed collapsed-right";
  };

  const getExpanded = (project: ProjectState) => {
    if (project === expanded) return true;
    return false;
  }

  return (
    <div className="projects-container">
      <h5 className="projects-heading">Projects</h5>
      <ProjectDetails project="CheapChat" className={`project ${getPositionClass("CheapChat")}`} handleClick={handleClick} expanded={getExpanded("CheapChat")}/>
      <ProjectDetails project="PyFiddle" className={`project ${getPositionClass("PyFiddle")}`} handleClick={handleClick} expanded={getExpanded("PyFiddle")}/>
      <ProjectDetails project="Namescraper" className={`project ${getPositionClass("Namescraper")}`} handleClick={handleClick} expanded={getExpanded("Namescraper")}/>
    </div>
  );
};

export default ProjectsContainer;
