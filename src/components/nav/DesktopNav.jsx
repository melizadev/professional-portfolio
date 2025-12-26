export default function DesktopNav({
  links,
  linkClass,
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
            className={linkClass(id)}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
