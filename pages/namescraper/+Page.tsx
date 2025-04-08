import React from "react";

import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer.js";

const Page: React.FC = () => {
  return (
    <>
      <ProjectsContainer initialExpanded="Namescraper" initialCollapsedLeft="CheapChat"/>
    </>
  );
}


export default Page;