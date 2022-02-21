import React from 'react';
import { Helmet } from 'react-helmet';
import pic from '../assets/pic.jpg';
import '../CSS/home.css';

const Home = () => (
  <div className="home">
    <Helmet>
      <title>iv4n4 | Home </title>
    </Helmet>
    <div className="txt-div  text-center mb-3">
      <h1 className="name text-center text-dark">Ivana Novaković-Leković</h1>
      <h3 className="dev text-center text-dark">Full-stack developer</h3>
      <div className="skills">
        <p className="skillp text-center ">
          <span className="font-weight-bold">LANGUAGES: </span>
          Ruby,  JavaScrypt, HTML,  CSS , MySQL
        </p>
        <p className="skillp">
          <span className="font-weight-bold">FRAMEWORKS: </span>
          Ruby on Rails, React, Redux, Bootstrap, Sidekiq, Rspec, Capybara
        </p>
        <p className="skillp">
          <span className="font-weight-bold">
            TOOLS & METHODS:
          </span>
          Github, Heroku, Netlify, Responsive design, TDD, Chrome Dev
        </p>
        <p className="skillp">
          <span className="font-weight-bold">SKILLS: </span>
          Pair-Programming, Teamwork, Mentoring
        </p>
      </div>
    </div>
    <div className="img-txt">
      <img src={pic} className="pic nocolor" alt="portrait" />
      <p className="mainp text-center">
        Need something web-related? The chances are that I can help you!
        Take a look at some of my projects, work experience, and bio.
        If you like what you see, reach out - we could make awesome stuff together.
        {' '}
      </p>
    </div>
  </div>
);
export default Home;
