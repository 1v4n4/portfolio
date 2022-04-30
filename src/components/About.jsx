import React, { useEffect } from 'react';
import '../CSS/about.css';
import me from '../assets/images/me.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'iv4n4 | About';
  }, []);
  return (
    <div className="about d-lg-flex">
      <img src={me} className="me" alt="portrait" />
      <p className="bio">
        I am a software development enthusiast, an open-source contributor,
        and a boot camp graduate,
        with an addiction to problem-solving activities.
        <br />
        For me, coding is work, but also a passion. As a result, I&apos;m currently
        {' '}
        <a href="https://github.com/gayanvoice/top-github-users/blob/main/markdown/public_contributions/montenegro.md" className="link-unstyled fyellow" target="_blank" rel="noreferrer">one of the most active GitHub users</a>
        {' '}
        in Montenegro (by public contributions).
        <br />
        Before my full-time commitment to web development, I was a journalist and an
        editor in the daily newspaper for almost two decades.
        Along with various programming educations,
        I have college degrees in Economics and Computer Science.
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
};
export default About;
