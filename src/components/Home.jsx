import Nav from "./Nav";

export default function Home() {
  return (
    <div className="relative w-full bg-[url('./assets/bg.avif')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      <div className="relative z-10 flex flex-col">
        <Nav />
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center px-6 gap-4 min-h-[65vh] md:min-h-[80vh] lg:min-h-[92vh]"
        >
          <h1 className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-5xl tracking-tight">
            Hi there! I'm{" "}
            <span className="text-amber-300">Mariann Zambrano</span>
            <br />
            <span className="text-amber-200">Frontend Developer</span>
          </h1>

          <h2 className="text-white/90 font-medium max-w-lg text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Creating modern, responsive and accessible digital experiences
            through clean code and elegant interfaces.
          </h2>
          <a
            href="#projects"
            aria-label="Go to projects section"
            className="inline-block text-sm sm:text-base md:text-lg font-semibold px-6 py-2 rounded-lg bg-amber-300/90 hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 shadow-md"
          >
            See my projects
          </a>
        </section>
      </div>
    </div>
  );
}
