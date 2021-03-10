// Import React
import React from 'react';
import { useState } from 'react';


// Import bootstrap components
import { Nav, Navbar, Form, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Redirect } from 'react-router-dom';

// Navigation Bar Component
const NavBar = () => {
  let isLoggedIn = sessionStorage.getItem('isAuthenticated');
  // const [count, setCount] = useState(0);
  // setCount(count+1);
  const [loggedIn, setloggedIn] = useState(0);
  
  
  function handleLogOut() {
    setloggedIn(1);
    console.log("loggedIn:", loggedIn);
    sessionStorage.clear();
    console.log("Logged Out");
  }
  
  return (
    <Container >
      <Navbar 
        collapseOnSelect
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
          {/* <Nav>
            <LinkContainer to='/account'>
              <Nav.Link>{isLoggedIn ? 'My Account' : 'My Account'}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login' onClick={() => {handleLogOut()}}>
              <Nav.Link>{(isLoggedIn) ? 'Log Out' : 'Log Out'}</Nav.Link>
            </LinkContainer>
          </Nav> */}

          <Nav>{renderMenu()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;