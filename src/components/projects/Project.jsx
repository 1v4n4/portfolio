import React from 'react';
import PropTypes from 'prop-types';
import '../../CSS/project.css';
import ProjectCarousel from './ProjectCarousel';
import ProjectTxt from './ProjectTxt';

const Project = ({ project }) => (
  <div className="main-project d-lg-flex  align-items-center" key={project[0]}>
    <ProjectCarousel
      project={project}
    />
    <ProjectTxt
      project={project}
    />
  </div>
);

Project.propTypes = {
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Project;
