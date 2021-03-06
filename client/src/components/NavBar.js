// Import React
import React from 'react';

// Import bootstrap components
import { Nav, Navbar, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

// Navigation Bar Component
const NavBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
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

        <Form inline>
          <Form.Control type='text' placeholder='Search' className='mr-sm-2' 
            value={searchTerm}
            onChange={handleChange}
          />
        </Form>

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <LinkContainer to='/login'>
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/account'>
              <Nav.Link>My Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
