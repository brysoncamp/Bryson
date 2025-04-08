import React from "react";
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer.js";

// import { usePageContext } from "vike-react/usePageContext";

const Page: React.FC = () => {
  // const { is404 } = usePageContext();
  return (
    <>
      <ProjectsContainer initialExpanded="CheapChat" initialCollapsedLeft="PyFiddle"/>
    </>
  );
}


export default Page;