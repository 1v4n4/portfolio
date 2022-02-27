import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import '../../CSS/project.css';

const ProjectModal = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 text-center text-lg-left">
        <button type="button" className="btn btn-outline-light my-xl-4" onClick={handleShow}>See more</button>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="project-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="m-3">{project[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-3">
          <img src={project[4][1]} alt="project" className="img-fluid mt-3" />
          <p className="my-4">{project[5]}</p>
          <p className="">{project[3]}</p>
          <a href={project[6]} className="link-unstyled" target="_blank" rel="noopener noreferrer"> More on GitHub </a>
        </Modal.Body>
        <Modal.Footer className="m-3">
          <button type="button" className="btn btn-outline-light" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default ProjectModal;
