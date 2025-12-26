export function useScrollTo() {
  const handleScroll = (ref) => {
    ref?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return handleScroll;
}
