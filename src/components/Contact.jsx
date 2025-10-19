import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("myznvgnz"); // 👈 अपना Formspree form ID

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-green-600 text-xl font-semibold">
          ✅ Thanks! Your message has been sent.
        </p>
      </div>
    );
  }

  return (
    <div
      name="Contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact Me</h1>
        <p className="text-gray-600">
          Please fill out the form below to get in touch with me.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md px-8 py-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Send Your Message
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Write your message here..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-indigo-600 text-white font-semibold rounded-lg py-2 hover:bg-indigo-700 transition duration-300"
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
