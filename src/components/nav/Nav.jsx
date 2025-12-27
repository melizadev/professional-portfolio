import { links } from "./navLinks";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import { useNav } from "./hooks/useNav";
export default function Nav({ scrollTo }) {
  const {
    activeSection,
    handleDesktopScroll,
    handleMobileScroll,
    isOpen,
    setIsOpen,
    mobileButtonRef,
    mobileNavRef,
  } = useNav();

  return (
    <header className="fixed top-0 w-full z-40 transition-all duration-300 bg-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="relative h-[9vh] flex items-center"
      >
        <DesktopNav
          links={links}
          activeSection={activeSection}
          onScroll={handleDesktopScroll}
          scrollTo={scrollTo}
        />

        <MobileMenuButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          ref={mobileButtonRef}
        />
        {isOpen && (
          <MobileNav
            links={links}
            onScroll={handleMobileScroll}
            scrollTo={scrollTo}
            ref={mobileNavRef}
            isOpen={isOpen}
            activeSection={activeSection}
          />
        )}
      </nav>
    </header>
  );
}
