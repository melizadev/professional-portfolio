import { projects } from "./data/data.js";
export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-h-full w-full flex flex-col items-center justify-start gap-15 bg-white py-15 px-10"
    >
      <h3
        id="projects-title"
        className="text-neutral-700 text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold"
      >
        Last Projects
      </h3>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-9 max-w-6xl"
        role="list"
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            role="listitem"
            tabIndex={0}
            aria-label={`Project ${index + 1}`}
            className="cursor-pointer h-50 w-full bg-white rounded border border-gray-300 hover:shadow-sm transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <figure className="flex h-full w-full items-center justify-center">
              <span className="text-neutral-600">Project {index + 1}</span>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
