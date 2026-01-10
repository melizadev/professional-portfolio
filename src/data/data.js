import jsLogo from "../assets/js.avif";
import tsLogo from "../assets/typescript.avif";
import cssLogo from "../assets/css.avif";
import htmlLogo from "../assets/html.avif";
import reactLogo from "../assets/react.avif";
import code from "../assets/code.avif";
import git from "../assets/git.avif";
import proj1 from "../assets/rickmortyapp.avif";
import proj2 from "../assets/aurora.avif";
import proj3 from "../assets/flow.avif";
import proj4 from "../assets/fave-list.avif";
import proj5 from "../assets/trivia.avif";
import proj6 from "../assets/calc.avif";

export const projects = [
  {
    id: 1,
    title: "Rick and Morty API",
    description:
      "A web application built using React.js that connects to the Rick and Morty public API.",
    imgUrl: proj1,
    projectUrl: "https://melizadev.github.io/rick-and-morty-api/",
  },
  {
    id: 2,
    title: "Aurora Weather",
    description:
      "Check the weather in any city instantly with Aurora Weather. Clear and up-to-date info for your day.",
    imgUrl: proj2,
    projectUrl: "https://melizadev.github.io/aurora-weather/",
  },
  {
    id: 3,
    title: "Task Flow",
    description:
      "TaskFlow a simple and efficient way to manage all your tasks.",
    imgUrl: proj3,
    projectUrl: "https://melizadev.github.io/task-flow/",
  },
  {
    id: 4,
    title: "Fave List",
    description:
      "Browse artists and music genres with a clean UI, responsive layout, and smooth animations",
    imgUrl: proj4,
    projectUrl: "https://melizadev.github.io/fave-list/",
  },
  {
    id: 5,
    title: "Trivia Game",
    description: "A fun My Little Pony trivia game built with React.",
    imgUrl: proj5,
    projectUrl: "https://melizadev.github.io/trivia-game/",
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "Modern calculator built with React, TypeScript, and Tailwind CSS. Supports full mathematical expressions.",
    imgUrl: proj6,
    projectUrl: "https://melizadev.github.io/calculator/",
  },
];

export const skills = [
  {
    name: "React",
    description:
      "Experienced with hooks, component architecture, state management, and building scalable interfaces.",
    imgUrl: reactLogo,
  },
  {
    name: "JavaScript",
    description:
      "Strong knowledge of ES6+, asynchronous programming, and clean, maintainable code practices.",
    imgUrl: jsLogo,
  },
  {
    name: "TypeScript",
    description:
      "Focused on type safety, generics, and creating robust and scalable applications.",
    imgUrl: tsLogo,
  },
  {
    name: "CSS",
    description:
      "Skilled in responsive design, modern layouts (Flexbox, Grid), animations, and scalability.",
    imgUrl: cssLogo,
  },
  {
    name: "HTML",
    description:
      "Semantic structure, performance optimizations, accessibility best practices, and performance.",
    imgUrl: htmlLogo,
  },
  {
    name: "Git",
    description:
      "Experience with version control, branching strategies, collaborative workflows (Git Flow, PRs).",
    imgUrl: git,
  },
  {
    name: "Clean Code & Best Practices",
    description:
      "Focused on writing readable, scalable and maintainable code following SOLID and modern standards.",
    imgUrl: code,
  },
  {
    name: "Accessibility",
    description:
      "Applied WCAG guidelines, semantic HTML, ARIA roles and inclusive design for optimal user experience.",
    imgUrl: code,
  },
];
