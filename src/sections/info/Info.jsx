import { forwardRef, memo } from "react";
const Info = forwardRef(({ onGoProjects }, ref) => {
  return (
    <section
      style={{ backgroundImage: "url('/professional-portfolio/bg.avif')" }}
      className="relative bg-cover bg-center"
      ref={ref}
      id="info"
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col items-center justify-center text-center px-6 gap-4 min-h-screen">
          <h1 className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-5xl tracking-tight">
            Hi there! I'm{" "}
            <span className="text-amber-300">Mariann Zambrano</span>
            <br />
            <span className="text-amber-200">Frontend Developer </span>
          </h1>

          <h2 className="text-white font-medium max-w-lg text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Creating modern, responsive and accessible digital experiences
            through clean code and elegant interfaces.
          </h2>
          <button
            type="button"
            aria-label="Go to projects section"
            className="cursor-pointer inline-block text-sm sm:text-base md:text-lg font-semibold px-6 py-2 rounded-lg bg-amber-300/90 hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-amber-300 shadow-md"
            onClick={onGoProjects}
          >
            See my projects.
          </button>
        </div>
      </div>
    </section>
  );
});

export default memo(Info);
