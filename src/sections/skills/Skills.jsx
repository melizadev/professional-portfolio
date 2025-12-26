import { skills } from "../../data/data.js";
import { forwardRef } from "react";
const Skills = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      aria-labelledby="skills-title"
      className="w-full bg-gray-50 py-12 px-10 flex flex-col items-center scroll-mt-[10vh]"
    >
      <h3
        id="skills-title"
        className="text-neutral-800 text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold mb-10 text-center"
      >
        Technical Skills
      </h3>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
        role="list"
      >
        {skills.map((skill, index) => (
          <article
            key={index}
            role="listitem"
            tabIndex={0}
            aria-label={`Skill in ${skill.name}`}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col items-center text-center hover:shadow-md transition-transform transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <img
                src={skill.imgUrl}
                alt={`${skill.name} logo`}
                className="w-14 h-14 object-contain"
              />
            </div>

            <h4 className="text-lg font-semibold text-neutral-800 mb-2">
              {skill.name}
            </h4>
            <p className="text-sm text-neutral-600">{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Skills;
