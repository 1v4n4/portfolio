import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { getLocation } from '../../API';
import FetchCountries from './FetchCountries';
import '../../CSS/contact.css';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    getLocation();
  }, []);

  /* eslint-disable */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0lk2sn', 'template_qeqq9zl', e.target, 'user_sIty8Dbq0OoIJPWAnYM4L')
      .then((result) => {
        if (result.text === 'OK') {
          toast.info('Mail sent. Awesome!', { position: toast.POSITION.TOP_CENTER });
        }
      }, (error) => {
        toast.info('Awww, message not sent. Try again, please.', { position: toast.POSITION.TOP_CENTER });
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
        <label htmlFor="email" className="form-label">Email</label><br />
        <input type="email" id="email" name="email" placeholder="name@example.com" required />
      </div>
      <div className="my-4">
        <label htmlFor="location" className="form-label">Location</label><br />
          <select name="location" id="location">
          <option id="default-location" />
          <FetchCountries />
          </select>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Place for your message</label><br />
        <textarea className="form-control" name="message" id="message" rows="3" />
      </div>
      <button type="submit" className="btn btn-outline-light mb-4" value="Send">Submit</button>
      <button type="submit" className="btn btn-outline-light mb-4" value="Reset">Reset</button>
    </form>
  );
};

export default ContactForm;
