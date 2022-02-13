import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/intro.css';
import { Helmet } from 'react-helmet';

const Intro = () => (
  <div className="intro-div">
    <Helmet>
      <title>iv4n4 | Intro</title>
    </Helmet>
    <Link to="/home" className="intro-link">
      <h1 className="glitch fintro text-light">
        <span aria-hidden="true">HELLO VISITOR</span>
        HELLO VISITOR
        <span aria-hidden="true">HELLO VISITOR</span>
      </h1>
    </Link>
  </div>
);

export default Intro;
