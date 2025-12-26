import { forwardRef } from "react";
const MobileNav = forwardRef(
  ({ links, onScroll, scrollTo, isOpen, activeSection }, ref) => {
    return (
      <ul
        id="mobile-navigation"
        className="absolute top-full left-0 right-0 z-50
        flex flex-col bg-black/70 backdrop-blur-md"
        ref={ref}
        aria-hidden={isOpen}
      >
        {links.map(({ id, label }) => (
          <li key={id} className="w-full">
            <button
              onClick={() => onScroll(scrollTo[id])}
              className={`px-4 py-2 font-semibold transition-all duration-300 cursor-pointer ${
                id === activeSection
                  ? "text-yellow-400 font-bold w-full py-4 px-6 text-left block"
                  : "text-gray-200 hover:text-white w-full py-4 px-6 text-left block"
              }`}
              aria-current={isOpen && activeSection === id ? "page" : undefined}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    );
  }
);
export default MobileNav;
