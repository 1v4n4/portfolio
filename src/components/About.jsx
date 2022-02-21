import React from 'react';
import { Helmet } from 'react-helmet';
import '../CSS/about.css';
import me from '../assets/me.jpg';

const About = () => (
  <div className="about d-lg-flex">
    <Helmet>
      <title>iv4n4 | About </title>
    </Helmet>
    <img src={me} className="nocolor me" alt="portrait" />
    <p className="bio">
      I am a software development enthusiast, an open-source contributor, and a boot camp graduate,
      with an addiction to problem-solving activities.
      For me, coding is work, but also a passion.
      Before my full-time commitment to web development, I was a journalist and an
      editor in the daily newspaper for almost two decades.
      Along with various programming educations,
      I have college degrees in economics and computer science.
      <br />
      Some (fun) facts about me can be found in this
      <a href="https://ivanana.dreamwidth.org/410.html" className="link-unstyled fyellow" target="_blank" rel="noreferrer"> blog post</a>
      .
      <br />
      More info about my recent work is
      <a href="https://github.com/WikiEducationFoundation/WikiEduDashboard/pulls?q=is%3Apr+author%3A1v4n4" className="link-unstyled fyellow" target="_blank" rel="noreferrer"> here</a>
      .

    </p>
  </div>
);
export default About;
