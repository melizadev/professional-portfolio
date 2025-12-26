import { useEffect } from "react";
export function useDismiss(refs, onDismiss, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const nodes = Array.isArray(refs) ? refs : [refs];

    const handleResize = () => {
      if (window.innerWidth <= 640) return;
      onDismiss();
    };

    const handlePointer = (event) => {
      if (nodes.some((r) => r.current?.contains(event.target))) return;
      onDismiss();
    };

    const handleKey = (event) => {
      if (event.key === "Escape") {
        onDismiss();
      }
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [refs, onDismiss, enabled]);
}
