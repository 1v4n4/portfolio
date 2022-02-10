import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Aside from './components/Aside';
import Contact from './components/Contact';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Intro} />
      <>
        <Header />
        <Aside />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </>
    </Switch>

  </BrowserRouter>
);
export default Routes;
