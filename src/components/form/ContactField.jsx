export default function ContactField({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}{" "}
        <span aria-hidden="true" className="text-red-500">
          *
        </span>
      </label>
      {type !== "textarea" ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `error-${id}` : undefined}
          {...register}
          className={`w-full bg-gray-100 focus:bg-white p-2 rounded border outline-none focus:ring-2 focus:ring-indigo-600 
            ${error ? "border-red-500" : "border-gray-300"}`}
        />
      ) : (
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `error-${id}` : undefined}
          {...register}
          className={`w-full bg-gray-100 focus:bg-white p-2 rounded border outline-none focus:ring-2 focus:ring-indigo-600 
            ${error ? "border-red-500" : "border-gray-300"}`}
        />
      )}
      {error && (
        <p id={`error-${id}`} role="alert" className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
}
