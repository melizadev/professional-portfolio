import { useState, useRef } from "react";
import { useActiveSection } from "./useActivateSection";
import { useDismiss } from "./useDismiss";
import { useScrollTo } from "../../../hooks/useScrollTo";
export function useNav() {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  //refs
  const mobileNavRef = useRef(null);
  const mobileButtonRef = useRef(null);
  //mobile menu closing management
  useDismiss([mobileNavRef, mobileButtonRef], () => setIsOpen(false), isOpen);
  //smooth scroll for links
  const handleScroll = useScrollTo();
  const handleDesktopScroll = (refOrGetter) => {
    handleScroll(refOrGetter);
  };
  const handleMobileScroll = (refOrGetter) => {
    handleScroll(refOrGetter);
    setIsOpen(false);
  };

  return {
    // state
    isOpen,
    setIsOpen,
    // refs
    mobileNavRef,
    mobileButtonRef,
    // behavior
    handleDesktopScroll,
    handleMobileScroll,
    // derived states
    activeSection,
  };
}
