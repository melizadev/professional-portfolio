import { IoMenuSharp } from "react-icons/io5";
import { forwardRef } from "react";
const MobileMenuButton = forwardRef(({ isOpen, setIsOpen }, ref) => {
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-end items-center px-4 w-full sm:hidden md:hidden lg:hidden">
      <button
        ref={ref}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
        className="rounded-lg p-2 hover:bg-white/10 transition"
      >
        <IoMenuSharp className="text-2xl text-neutral-400" />
      </button>
    </div>
  );
});
export default MobileMenuButton;
