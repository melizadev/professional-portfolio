import { useRef, useCallback } from "react";
import { useScrollTo } from "../hooks/useScrollTo";
import Nav from "../components/nav/Nav";
import Info from "../sections/Info/Info";
import Projects from "../sections/projects/Projects";
import ContactForm from "../sections/form/ContactForm";
import Footer from "../components/footer/Footer";
import Skills from "../sections/skills/Skills";
export default function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const infoRef = useRef(null);
  const handleScroll = useScrollTo();

  return (
    <>
      <Nav
        scrollTo={{
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
          info: infoRef,
        }}
      />
      <main className="h-full w-full">
        <Info
          ref={infoRef}
          onGoProjects={useCallback(
            () => handleScroll(projectsRef),
            [handleScroll]
          )}
        />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <ContactForm ref={contactRef} />

        <Footer />
      </main>
    </>
  );
}
