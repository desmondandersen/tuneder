// Import React
import React from 'react';

// Import bootstrap components
import { Nav, Navbar, Form, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

// Navigation Bar Component
const NavBar = () => {
  function handleLogOut() {
    sessionStorage.removeItem('isAuthenticated');
    if(sessionStorage.getItem('type') == 'Venue')
    {
      sessionStorage.removeItem('type');
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('address');
      sessionStorage.removeItem('city');
      sessionStorage.removeItem('state');
      sessionStorage.removeItem('zip');
      sessionStorage.removeItem('description');
    }
    else
    {
      sessionStorage.removeItem('type');
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('instrument_1');
      sessionStorage.removeItem('instrument_2');
      sessionStorage.removeItem('genre');
      sessionStorage.removeItem('bio');
      sessionStorage.removeItem('portfolio');
    }
  }

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

        <Form inline>
          <Form.Control type='text' placeholder='Search' className='mr-sm-2' />
        </Form>

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <LinkContainer to='/account'>
              <Nav.Link>My Account</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login' onClick={() => {handleLogOut()}}>
              <Nav.Link>Log Out</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
