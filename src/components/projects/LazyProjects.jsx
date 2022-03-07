import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';

const Projects = React.lazy(() => import('./Projects'));

const LazyProject = ({ project }) => (
  <Suspense fallback={<Loading />}>
    <Projects project={project} />
  </Suspense>
);

LazyProject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default LazyProject;
