import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = ({ project }) => (
  <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src={project[4][0]}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src={project[4][1]}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-img"
        src={project[4][2]}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);
ProjectCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default ProjectCarousel;
