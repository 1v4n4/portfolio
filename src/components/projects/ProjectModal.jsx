import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 text-center text-lg-left">
        <button type="button" className="btn btn-outline-light my-xl-4" onClick={handleShow}>See more</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{project[5]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default ProjectModal;
