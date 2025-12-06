import { IoMenuSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar menú al hacer click en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="font-sans font-medium text-white w-full">
      <nav aria-label="Main navigation" className="relative">
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex justify-end items-center gap-6 px-8 py-4">
          <li>
            <a
              href="#skills"
              className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-105"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-amber-300/90 hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-300 text-black font-semibold shadow-md"
            >
              Let’s Talk
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex justify-end items-center p-4 w-full sm:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label="Toggle navigation menu"
            className="rounded-lg hover:bg-white/10 p-2 transition-all duration-200"
          >
            <IoMenuSharp className="text-2xl" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul
            id="main-navigation"
            className="flex flex-col items-start px-4 py-4 bg-black/60 backdrop-blur-md absolute top-full left-0 right-0 w-full z-50 sm:hidden transition-opacity duration-300"
            onMouseLeave={() => setTimeout(() => setIsOpen(false), 200)}
          >
            <li className="w-full">
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="block w-full p-2 hover:bg-white/10 transition-all duration-300 "
              >
                Skills
              </a>
            </li>
            <li className="w-full">
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="block w-full p-2 hover:bg-white/10 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li className="w-full">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full p-2 hover:bg-white/10 transition-all duration-300"
              >
                Let’s Talk
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
