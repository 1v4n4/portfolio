import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import isWin from '../helpers';

const mBottom = isWin ? 'mb-3' : 'mb-5';

const Header = () => (
  <div className="my-4">
    <Navbar collapseOnSelect expand="lg" variant="dark" className={`${mBottom} justify-content-between fintro text-light`}>
      <Container fluid className="justify-content-between px-sm-5 mx-md-5">
        <Navbar.Brand>
          <Link
            to="/home"
            className="link-unstyled text-light"
          >
            <motion.h2
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{
                delay: 2, duration: 0.5, stiffness: 90, type: 'spring',
              }}
            >
              1v4n4
            </motion.h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="mx-2" href="/projects">
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(67,67,67)',
                }}
              >
                PROJECTS
              </motion.h5>
            </Nav.Link>
            {/* <Nav.Link className="mx-2" href="/blog">
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(67,67,67)',
                }}
              >
                BLOG
              </motion.h5>
            </Nav.Link> */}
            <Nav.Link className="mx-2" href="/about">
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(67,67,67)',
                }}
              >
                ABOUT
              </motion.h5>
            </Nav.Link>
            <Nav.Link className="mx-2" href="/contact">
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(67,67,67)',
                }}
              >
                CONTACT
              </motion.h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
export default Header;
