import React, { useEffect } from 'react';
import pic from '../../assets/images/pic.jpg';
import resume from '../../assets/Resume.pdf';
import '../../CSS/home.css';
import Skill from './Skill';
import { skillsList } from '../../assets/data';

const Home = () => {
  useEffect(() => {
    document.title = 'iv4n4 | Home';
  }, []);
  return (
    <div className="home">
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
        <img src={pic} className="pic" alt="portrait" />
        <p className="mainp text-center">
          Need something web-related? The chances are that I can help you!
          Take a look at some of my projects, work experience, and bio.
          If you like what you see, reach out - we could make awesome things together.
          {' '}
          <br />
          <br />
          <a href={resume} className="link-unstyled fyellow fintro" download>DOWNLOAD MY RESUME</a>
        </p>
      </div>
    </div>
  );
};
export default Home;
