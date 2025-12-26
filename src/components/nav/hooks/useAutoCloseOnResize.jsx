import { useEffect } from "react";
export const useAutoCloseOnResize = (setIsOpen) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);
};
