import { useState, useRef } from "react";
import { useScrollState } from "./useScrollState";
import { useActiveSection } from "./useActivateSection";
import { useDismiss } from "./useDismiss";
import { useScrollTo } from "../../../hooks/useScrollTo";
export function useNav() {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const scrolled = useScrollState();
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
  // desktop browser styles
  const base =
    "px-4 py-2 font-semibold cursor-pointer transition-colors duration-300";

  const inactiveByScroll = {
    scrolled: "text-neutral-700 hover:text-neutral-900",
    default: "text-white/80 hover:text-white",
  };

  const linkClass = (id) => {
    const isActive = activeSection === id;

    return `${base} ${
      isActive
        ? "text-amber-400"
        : inactiveByScroll[scrolled ? "scrolled" : "default"]
    }`;
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
    linkClass,
    // derived states
    activeSection,
    scrolled,
  };
}
