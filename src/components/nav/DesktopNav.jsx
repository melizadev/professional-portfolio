export default function DesktopNav({
  links,
  activeSection,
  onScroll,
  scrollTo,
}) {
  return (
    <ul className="hidden sm:flex justify-end items-center gap-6 px-8 w-full">
      {links.map(({ id, label }) => (
        <li key={id}>
          <button
            onClick={() => onScroll(scrollTo[id])}
            className={`px-4 py-2 font-semibold transition-all duration-300 cursor-pointer ${
              id === activeSection
                ? "text-amber-400 font-bold w-full py-4 px-6 text-left block"
                : "text-neutral-600 hover:text-neutral-700 w-full py-4 px-6 text-left block"
            }`}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
