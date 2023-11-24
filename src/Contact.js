import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>

      <p>
        If you have any questions or feedback, feel free to reach out to us!
      </p>

      <form>
        <label>
          Name:
          <input type='text' placeholder='Your Name' />
        </label>

        <label>
          Email:
          <input type='email' placeholder='Your Email' />
        </label>

        <label>
          Message:
          <textarea placeholder='Your Message'></textarea>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
