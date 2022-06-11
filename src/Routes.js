import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Intro from './components/Intro';
import Home from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/projects/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Aside from './components/Aside';
import Contact from './components/contact/Contact';
import 'react-toastify/dist/ReactToastify.css';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Intro} bg="dark" />
      <>
        <Header />
        <ToastContainer autoClose={5000} theme="dark" />
        <Aside />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </>
    </Switch>

  </BrowserRouter>
);
export default Routes;
