import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactField from "./ContactField";
import { contactSchema } from "./validation";
import { forwardRef, useEffect } from "react";

const ContactForm = forwardRef((_, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    try {
      await emailjs.send(serviceId, templateId, data, publicKey);
      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccessMessage("There was an error, please try again.");
    }
  };
  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-gray-100 w-full min-h-[520px] flex flex-col md:flex-row items-center md:items-start p-8 justify-start md:justify-evenly gap-4 scroll-mt-[10vh]"
      ref={ref}
    >
      <ContactInfo />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full max-w-[450px]"
        noValidate
      >
        <ContactField
          id="name"
          label="Name"
          register={register("name")}
          error={errors.name}
          placeholder="Jorge..."
        />
        <ContactField
          id="email"
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
          placeholder="jorge123@gmail.com"
        />
        <ContactField
          id="message"
          label="Message"
          type="textarea"
          register={register("message")}
          error={errors.message}
          placeholder="Hey there! I would like to discuss..."
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#315fc4] hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 
            disabled:opacity-60 text-white py-2 rounded transition duration-200 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {successMessage && (
          <p
            aria-live="polite"
            className={`text-sm ${
              successMessage.includes("successfully")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
});
export default ContactForm;
