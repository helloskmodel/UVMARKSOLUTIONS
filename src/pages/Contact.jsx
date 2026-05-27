import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      <h2>Let's Get Labelling.</h2>

      <p>
        Contact our team to discuss laboratory identification,
        workflow coordination, and application-focused solutions.
      </p>

      <div className="locations">
        Houston · New York · Vancouver
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/xxxxxx"
        method="POST"
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
        />

        <textarea
          name="message"
          placeholder="Tell us about your application, workflow, or identification requirements."
        ></textarea>

        <button type="submit">
          Contact Us
        </button>
      </form>

    </section>
  );
}
