import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    // Fake async submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // GSAP animation
      gsap.fromTo(
        ".success-message",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );

      // Reset form after 3s
      setTimeout(() => {
        setSuccess(false);
        reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section className="bg-[#CB0B19] py-16 text-white newzletter">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Join Our Newsletter</h2>
        <p className="mb-8 text-center">Subscribe to stay updated with the latest news</p>

        {success && (
          <div className="success-message flex items-center justify-center mb-4 text-green-400">
            <FaCheckCircle className="mr-2" />
            <span>Successfully Subscribed!</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 rounded text-black bg-white ${
                errors.name ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 rounded text-black bg-white ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-gray-600 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition flex justify-center items-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
