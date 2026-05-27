import React from "react";
import "../styles/Contact.css";

export default function Contact() {

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    formData.append(
      "access_key",
      "b27659f3-f2a3-4011-b1bb-82f847da76da"
    );

    const submitBtn =
      form.querySelector("button");

    const originalText =
      submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert(
          "Success! Your message has been sent."
        );

        form.reset();

      } else {

        alert("Error: " + data.message);

      }

    } catch (error) {

      alert(
        "Something went wrong. Please try again."
      );

    } finally {

      submitBtn.textContent =
        originalText;

      submitBtn.disabled = false;
    }
  };

  return (
    <section className="contact-page">

      <h2>Let's Get Labelling.</h2>

      <p>
        Contact our team to discuss laboratory
        identification, workflow coordination,
        and application-focused solutions.
      </p>

      <div className="locations">
        Houston · New York · Vancouver
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="company"
          placeholder="Your company"
        />

        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your application, workflow, or identification requirements."
          required
        ></textarea>

        <button type="submit">
          Contact Us
        </button>

      </form>

    </section>
  );
}
