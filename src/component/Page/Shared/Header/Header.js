import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <header className='sticky-top'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">BEST Wedding Photographer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>


            </Nav>
            <Nav>
              {
                user ?
                  <Nav.Link onClick={handleSignOut}>Sign Out
                  </Nav.Link>
                  :
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
              }
              <Nav.Link eventKey={2} as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </header>

  );
};

export default Header;