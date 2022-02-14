import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from './ContactForm';
import '../CSS/contact.css';

const Contact = () => (
  <div>
    <Helmet>
      <title>iv4n4 | Contact </title>
    </Helmet>
    <div className="col-6 mx-auto contact-div">
      <p className="contact-txt">
        If you have a project you are interested in developing, or you are open to collaboration.
        Even if you just have a  suggestion or a question...
        <span className="yellowspan"> Reach out!</span>
      </p>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
