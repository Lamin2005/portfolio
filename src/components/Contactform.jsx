import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../style/ContactForm.css";

const ContactForm = () => {
  const formRef = useRef();
  const [loading,setloading]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .sendForm(
         process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setloading(false);
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact">
      <h2 className="contact-title">📩 Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>🚀 {loading ? "Sending..." : "Send Message"}</button>
      </form>
    </section>
  );
};

export default ContactForm;
