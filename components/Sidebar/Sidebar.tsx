import React, { useRef, useState, useEffect } from "react";
import "./Sidebar.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer.js";
import AboutSection from "../AboutSection/AboutSection.js";
import StackSection from "../StackSection/StackSection.js";
import EducationSection from "../EducationSection/EducationSection.js";
import CertificatesSection from "../CertificatesSection/CertificatesSection.js";
import ScrollPrompt from "../ScrollPrompt/ScrollPrompt";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import DownloadResume from "../DownloadResume/DownloadResume";
import ProjectsVerticalContainer from "../ProjectsVerticalContainer/ProjectsVerticalContainer";

import { usePageContext } from "vike-react/usePageContext";

type SidebarProps = {
  isVertical: boolean;
  children?: React.ReactNode;
};

type ProjectName = "cheapchat" | "pyfiddle" | "namescraper";
const VALID_PROJECTS = new Set(["cheapchat", "pyfiddle", "namescraper"]);

const Sidebar: React.FC<SidebarProps> = ({ isVertical, children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { urlPathname } = usePageContext();

  const lastSegment = urlPathname.split("/").filter(Boolean).pop() ?? null;
  const initialExpanded = lastSegment && VALID_PROJECTS.has(lastSegment) ? (lastSegment as ProjectName) : null;

  const [expandedProject, setExpandedProject] = useState<ProjectName | null>(initialExpanded);

  console.log("setExpandedProject", typeof setExpandedProject);


  // Optional: Update expandedProject if URL changes (you can remove this if it should only set once)
  useEffect(() => {
    const updatedLastSegment = urlPathname.split("/").filter(Boolean).pop() ?? null;
    const updatedExpanded = updatedLastSegment && VALID_PROJECTS.has(updatedLastSegment) ? (updatedLastSegment as ProjectName) : null;
    setExpandedProject(updatedExpanded);
  }, [urlPathname]);

  return (
    <div className={`sidebar ${isVertical ? "sidebar-vertical" : ""}`}>
      <ProfileContainer />
      <div ref={sidebarRef} className="sidebar-scroll">
        <AboutSection />
        <StackSection />
        {isVertical && (
          <ProjectsVerticalContainer
            expandedProject={expandedProject}
            setExpandedProject={setExpandedProject}
          />
        )}
        <EducationSection />
        <CertificatesSection />
        <ExperienceSection />
        <DownloadResume />
        <ScrollPrompt sidebarRef={sidebarRef} />
      </div>
    </div>
  );
};

export default Sidebar;
