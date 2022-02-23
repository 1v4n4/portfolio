import React from 'react';
import { Helmet } from 'react-helmet';
import pic from '../../assets/images/pic.jpg';
import '../../CSS/home.css';
import Skill from './Skill';
import { skillsList } from '../../assets/data';

const Home = () => (
  <div className="home">
    <Helmet>
      <title>iv4n4 | Home </title>
    </Helmet>
    <div className="txt-div  text-center mb-3">
      <h1 className="name text-center text-dark">Ivana Novaković-Leković</h1>
      <h3 className="dev text-center text-dark">Full-stack developer</h3>
      <div className="skills">
        {skillsList.map((skill) => (
          <Skill
            tag={skill[0]}
            list={skill[1]}
            key={skill[0]}
          />
        ))}
      </div>
    </div>
    <div className="img-txt">
      <img src={pic} className="pic nocolor" alt="portrait" />
      <p className="mainp text-center fyellow">
        Need something web-related? The chances are that I can help you!
        Take a look at some of my projects, work experience, and bio.
        If you like what you see, reach out - we could make awesome stuff together.
        {' '}
      </p>
    </div>
  </div>
);
export default Home;
