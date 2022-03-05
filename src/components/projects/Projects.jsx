import React from 'react';
import { Helmet } from 'react-helmet';
import { mainProject, projects } from '../../assets/data';
import Project from './Project';
import '../../CSS/project.css';

const Projects = () => (
  <div>
    <Helmet>
      <title>iv4n4 | Projects</title>
    </Helmet>
    <div className="main-project">
      <Project project={mainProject} />
    </div>
    <div className="none my-5">
      <a href="#projects-container" className="link-unstyled fintro">OTHER PROJECTS</a>
    </div>
    <div id="projects-container" className="pt-5">
      {projects.map((project) => (
        <div key={project[0]}>
          <Project project={project} />
          <br />
          <br />
        </div>
      ))}
    </div>
  </div>
);
export default Projects;
