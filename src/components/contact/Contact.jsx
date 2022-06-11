import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import '../../CSS/contact.css';
import isWin from '../../helpers';

const Contact = () => {
  useEffect(() => {
    document.title = 'iv4n4 | Contact';
  }, []);

  const topMargin = isWin ? 'mt-5 pt-5' : 'contact-div';

  return (
    <div>
      <div className={`col-6 mx-auto ${topMargin}`}>
        <p className="contact-txt">
          If you have a project you are interested in developing, or you are open to collaboration.
          Even if you just have a  suggestion or a question...
          <span className="fyellow"> Reach out!</span>
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
