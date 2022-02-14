import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
/* eslint-disable */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0lk2sn', 'template_qeqq9zl', e.target, 'user_sIty8Dbq0OoIJPWAnYM4L')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (

    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="my-4">
        <label htmlFor="name" className="form-label">Name</label><br />
        <input type="name" id="email" name="email" placeholder="your name" />
      </div>
      <div className="my-4">
        <label htmlFor="email" className="form-label">Email address</label><br />
        <input type="email" id="email" name="email" placeholder="name@example.com" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Place for your message</label><br />
        <textarea className="form-control" name="message" id="message" rows="3" />
      </div>
      <button type="submit" className="btn btn-outline-light mb-4" value="Send">Submit</button>
      <button type="submit" className="btn btn-outline-light mb-4" value="Reset">Reset</button>
    </form>
  );S
};

export default ContactForm;
