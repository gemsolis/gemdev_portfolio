"use client";

import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

init("caf5SQzJJkshFVwfr");

const Form = () => {
  const form = useRef(null);
  const recaptchaRef = useRef(null);
  const [error, setError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setError("reCAPTCHA verification failed");
      return;
    }

    try {
      const serviceId = "service_mee5qwe";
      const templateId = "template_bhx27un";
      const userId = "caf5SQzJJkshFVwfr";

      const formData = new FormData(form.current);
      const user_name = formData.get("user_name");
      const user_email = formData.get("user_email");
      const message = formData.get("message");

      await emailjs.sendForm(serviceId, templateId, form.current, userId);

      setError(null);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Error sending email");
      alert("Error sending email");
    }
  };

  return (
    <div className=" g-padding flex w-full flex-col ">
      <h3 className="text-left text-2xl max-sm:text-[25px]">
        Message me directly!
      </h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-5 flex w-full flex-col"
      >
        <label className="mb-5 flex flex-col items-start justify-start">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full rounded-md border-2 border-gray-200 bg-transparent p-2 text-white"
          />
        </label>
        <label className="mb-5 flex flex-col items-start justify-start">
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="w-full rounded-md border-2 border-gray-200 bg-transparent p-2 text-white"
          />
        </label>

        <label className="mb-5 flex flex-col items-start justify-start">
          <textarea
            name="message"
            placeholder="Your message..."
            className="h-[200px] w-full resize-none rounded-md border-2 border-gray-200 bg-transparent p-2 text-white"
          />
        </label>
        <div className="mb-5">
          <ReCAPTCHA
            ref={recaptchaRef}
            data-size="compact"
            className="max-sm:scale-90"
            sitekey="6LfyIUcpAAAAAFcdS6Vf6jMkOtQkisUeGLKmU4qx"
            onChange={(value) => console.log("reCAPTCHA value:", value)}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-orange-500 p-4 text-white"
        >
          Send
        </button>
      </form>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Form;
