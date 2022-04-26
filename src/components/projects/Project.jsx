import React from 'react';
import PropTypes from 'prop-types';
import '../../CSS/project.css';
import ProjectCarousel from './ProjectCarousel';
import ProjectTxt from './ProjectTxt';

const Project = ({ project }) => (
  <div className="project d-lg-flex  align-items-center my-3">
    <ProjectCarousel
      project={project}
    />
    <ProjectTxt
      project={project}
    />
  </div>
);

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Project;
