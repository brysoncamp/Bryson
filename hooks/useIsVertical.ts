import { useEffect, useState } from "react";

export default function useIsVertical(remBreakpoint = 66) {
  const [isVertical, setIsVertical] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const breakpointPx = remInPx * remBreakpoint;

    const checkIsVertical = () => {
      setIsVertical(window.innerWidth < breakpointPx);
    };

    checkIsVertical();
    window.addEventListener("resize", checkIsVertical);

    return () => window.removeEventListener("resize", checkIsVertical);
  }, [remBreakpoint]);

  return isVertical;
}
