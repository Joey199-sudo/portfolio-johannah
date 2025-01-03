import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/{yourFormID}" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

// Contact;
