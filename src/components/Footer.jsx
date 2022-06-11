import React from 'react';
import { useLocation } from 'react-router-dom';
import isWin from '../helpers';
import '../CSS/footer.css';

const Footer = () => {
  const location = useLocation();
  const footerClass = location.pathname.match(/projects/) ? 'footer-projects' : 'footer';
  const winMargin = isWin ? 'mt-5' : '';

  return (
    <div className={footerClass}>
      <p className={`text-secondary text-center ${winMargin}`}>
        @ 2022
        <a href="https://github.com/1v4n4" className="link-unstyled text-secondary mx-2" target="_blank" rel="noreferrer">1v4n4</a>
      </p>
    </div>

  );
};
export default Footer;
