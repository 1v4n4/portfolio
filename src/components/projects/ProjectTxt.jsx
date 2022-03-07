import React from 'react';
import PropTypes from 'prop-types';
import ProjectModal from './ProjectModal';

const ProjectTxt = ({ project }) => (
  <div className="col-lg-3 col-xl-4">
    <h4 className="project-title my-xs-3 my-lg-1 text-lg-left mb-xl-4">{project[0]}</h4>
    <p className="summary text-lg-left">{project[1]}</p>
    <p className="languages text-lg-left mt-xl-4 fyellow">
      {project[2]}
      {' '}
    </p>
    <ProjectModal
      project={project}
    />
  </div>
);

ProjectTxt.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProjectTxt;
