import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../CSS/aside.css';

const Aside = () => (
  <motion.div
    className="aside"
    initial={{ x: -40 }}
    animate={{ x: 0 }}
    transition={{
      delay: 3, duration: 5, type: 'tween', opacity: 1,
    }}
  >
    <a href="https://github.com/1v4n4" className="link-unstyled text-secondary" target="_blank" rel="noreferrer">
      <FaGithub className=" my-1 icons" />
    </a>
    <br />
    <a href="https://www.linkedin.com/in/1v4n4/" className="link-unstyled text-secondary" target="_blank" rel="noreferrer">
      <FaLinkedin className="my-1 icons" />
    </a>
    <br />
    <a href="https://twitter.com/_1v4n4" className="link-unstyled text-secondary social-ntwrk-link" target="_blank" rel="noreferrer">
      <FaTwitterSquare className="my-1 icons" />
    </a>
  </motion.div>
);
export default Aside;
