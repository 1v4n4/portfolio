import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/intro.css';

const Intro = () => (
  <div>
    <Link to="/home" className="intro-link">
      <h1 className="glitch fintro text-light">
        <span aria-hidden="true">Hello visitor </span>
        Hello visitor
        <span aria-hidden="true">Hello visitor </span>
      </h1>
    </Link>
  </div>
);

export default Intro;
