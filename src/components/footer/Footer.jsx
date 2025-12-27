import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-semibold tracking-wide">
            Mariann Zambrano — Frontend Developer
          </h3>
          <p className="text-sm text-gray-400">
            © 2025 · Professional Portfolio
          </p>
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:scale-110 cursor-pointer hover:text-white transition-transform duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:scale-110 cursor-pointer hover:text-white transition-transform duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/melizadev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}
