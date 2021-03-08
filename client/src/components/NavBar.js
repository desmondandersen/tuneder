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
    // <Redirect
    // to={{
    //   pathname: '/',
    // }}
    // />
    sessionStorage.clear();

   
    console.log("Logged Out");
  }
  
//   if (isLoggedIn)
// {
//   isLoggedIn = true;
// }   
// if (sessionStorage.getItem('isAuthenticated')==false){
//   isLoggedIn = false;
// } 

  // const [searchTerm, setSearchTerm] = React.useState("");
  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  //   console.log(searchTerm);
  //   return searchTerm;
  // };
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

        {/* <Form inline>
          <Form.Control type='text' placeholder='Search' className='mr-sm-2' 
            value={searchTerm}
            onChange={handleChange}
          />
        </Form> */}

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <LinkContainer to='/account'>
              <Nav.Link>{isLoggedIn ? 'My Account' : 'my account'}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login' onClick={() => {handleLogOut()}}>
              <Nav.Link>{(isLoggedIn) ? 'Log Out' : 'Log In'}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;