import { projects } from "../../data/data.js";
import { forwardRef } from "react";

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="projects-title"
      className=" w-full flex flex-col items-center justify-start gap-15 bg-white py-10 px-10 scroll-mt-[10vh]"
    >
      <h3
        id="projects-title"
        className="text-neutral-800 text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold"
      >
        Last Projects
      </h3>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-9 max-w-6xl"
        role="list"
      >
        {projects.map((project, index) => (
          <article
            className="bg-white rounded-lg shadow-sm border border-gray-200 pb-3 flex flex-col items-center text-center hover:shadow-md transition-transform transform duration-200 hover:scale-105"
            role="listitem"
            key={index}
            aria-label={`Skill in ${project.title}`}
          >
            {" "}
            <div className="w-full rounded-t-lg h-30  bg-gray-200 mb-2 flex items-center justify-center">
              <img
                src={project.imgUrl}
                alt={`${project.title}`}
                className="w-full h-full object-cover object-top rounded-t-lg"
              />
            </div>
            <a
              href="https://melizadev.github.io/rick-and-morty-api/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-neutral-700  flex flex-col items-center text-center "
            >
              <h4 className="text-lg font-semibold text-[#315fc4] hover:text-[#1e40af] duration-200">
                {project.title}
              </h4>
            </a>{" "}
            <p className="text-sm text-neutral-600 px-7 text-center">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Projects;
