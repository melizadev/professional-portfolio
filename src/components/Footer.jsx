import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4">
      <div className=" mx-auto flex items-center justify-between gap-4">
        <h3 className=" font-semibold tracking-wide">
          © 2025 |Professional portfolio
        </h3>
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}
