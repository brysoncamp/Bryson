import React from "react";
import "./LayoutDefault.css";
import Sidebar from "../components/Sidebar/Sidebar.js";
import useIsVertical from "../hooks/useIsVertical.js";

const LayoutDefault: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isVertical = useIsVertical();

  if (typeof isVertical !== "boolean") return null;

  return (
    <main className={isVertical ? "main-vertical" : ""}>
      <Sidebar isVertical={isVertical} children={children} />
      {!isVertical && children}
    </main>
  );
};

export default LayoutDefault;