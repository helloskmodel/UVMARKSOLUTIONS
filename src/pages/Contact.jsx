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

      <form className="contact-form">
        <input type="text" placeholder="Your company" />
        <input type="email" placeholder="name@company.com" />
        <textarea
          placeholder="Tell us about your application, workflow, or identification requirements."
        ></textarea>

        <button type="submit">Contact Us</button>
      </form>

    </section>
  );
}
