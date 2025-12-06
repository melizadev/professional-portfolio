import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[430px]">
      <h3
        id="contact-title"
        className="text-3xl text-neutral-800 md:text-4xl font-bold"
      >
        Get in Touch
      </h3>
      <p className="text-base md:text-lg text-neutral-800 leading-relaxed">
        If you’re looking for a frontend developer who combines clean code with
        elegant and user-centered design, I’d love to hear from you.
      </p>

      <p className="flex items-center gap-2">
        <MdOutlineMail aria-hidden="true" />
        <span className="break-all text-neutral-800">
          mariannelisa2000@gmail.com
        </span>
      </p>

      <p className="flex items-center text-neutral-800 gap-2">
        <FaLocationDot aria-hidden="true" />
        <span>Colombia, Bogotá.</span>
      </p>
    </div>
  );
}
