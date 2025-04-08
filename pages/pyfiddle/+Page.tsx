import React from "react";

import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer.jsx";

const Page: React.FC = () => {
  return (
    <>
      <ProjectsContainer initialExpanded="PyFiddle" initialCollapsedLeft="CheapChat"/>
    </>
  );
}


export default Page;