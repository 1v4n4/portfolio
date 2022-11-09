import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './home/Home';
import Header from './Header';
import Footer from './Footer';
import Projects from './projects/Projects';
import About from './About';
import Blog from './Blog';
import Aside from './Aside';
import Contact from './contact/Contact';

const Layout = () => (
  <>
    <Header />
    <ToastContainer autoClose={5000} theme="dark" />
    <Aside />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
);

export default Layout;
