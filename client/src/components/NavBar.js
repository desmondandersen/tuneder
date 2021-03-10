// Import React
import React from 'react';
import { useState } from 'react';

// Import bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

// Navigation Bar Component
const NavBar = () => {
  let isLoggedIn = sessionStorage.getItem('isAuthenticated');
  const [loggedIn, setloggedIn] = useState(0);

  const handleLogOut = () => {
    setloggedIn(1);
    sessionStorage.clear();
  };

  const renderMenu = () => {
    if (isLoggedIn) {
      return (
        <>
          <LinkContainer to='/account'>
            <Nav.Link>My Account</Nav.Link>
          </LinkContainer>
          <LinkContainer
            to='/'
            onClick={() => {
              handleLogOut();
            }}
          >
            <Nav.Link>Log Out</Nav.Link>
          </LinkContainer>
        </>
      );
    } else {
      return (
        <>
          <LinkContainer to='/login'>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </>
      );
    }
  };

  return (
    <Container>
      <Navbar
        collapseOnSelect
        className='bg-light justify-content-between navbar'
        expand='lg'
      >
        <Link to='/'>
          <Navbar.Brand>
            <img
              alt=''
              src='logo512.png'
              className='d-inline-block align-top navbar__logo'
            />{' '}
            Tuneder
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>{renderMenu()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
