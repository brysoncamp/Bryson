import { useEffect, useState } from "react";
import scrollUrl from "../../assets/vectors/scroll.svg";
import "./ScrollPrompt.css";

interface ScrollPromptProps {
  sidebarRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollPrompt: React.FC<ScrollPromptProps> = ({ sidebarRef }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const isScrollable = sidebar.scrollHeight > sidebar.clientHeight;

    if (!isScrollable) return;

    const onUserScroll = () => {
      setShowPrompt(false);
      sidebar.removeEventListener("scroll", onUserScroll);
    };

    setShowPrompt(true);
    sidebar.addEventListener("scroll", onUserScroll);

    return () => {
      sidebar.removeEventListener("scroll", onUserScroll);
    };
  }, [sidebarRef]);

  if (!showPrompt) return null;

  return (
    <div className="scroll-prompt-container">
      <div className="scroll-prompt unselectable fade-in-out">
        <img src={scrollUrl} alt="scroll" />
      </div>
    </div>
  );
};

export default ScrollPrompt;
