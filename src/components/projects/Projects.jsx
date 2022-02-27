import React from 'react';
import { Helmet } from 'react-helmet';
import { mainProject } from '../../assets/data';
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
    <div className="projects-container">
      <p>div for projects</p>
    </div>
  </div>
);
export default Projects;
