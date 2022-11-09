import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/intro.css';

const Intro = () => {
  useEffect(() => {
    document.title = 'iv4n4 | Intro';
  }, []);

  return (
    <div className="intro-div">
      <Link to="/home" className="intro-link">
        <h1 className="glitch fintro text-light">
          <span aria-hidden="true">HELLO VISITOR</span>
          HELLO VISITOR
          <span aria-hidden="true">HELLO VISITOR</span>
        </h1>
      </Link>
    </div>
  );
};

export default Intro;
