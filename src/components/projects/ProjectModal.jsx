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
          <p className="text-center">{project[3]}</p>
          <img src={project[4][1]} alt="project" className="img-fluid mt-3" />
          {project[5].map((line) => (
            <p className="my-4" key={line}>{line}</p>))}
          {project[6].map((link) => (
            <>
              <a href={link[1]} className="link-unstyled" target="_blank" rel="noopener noreferrer" key={link[0]}>{link[0]}</a>
              <br />
            </>
          ))}
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
