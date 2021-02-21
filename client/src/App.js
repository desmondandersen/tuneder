import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getVenues } from './actions/venues';
import Login from './components/Login.js';
import Routes from './Routes.js';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVenues());
  }, [dispatch]);

  return (
    <div className='App'>
      <Container>
        <Navbar collapseOnSelect bg='light' expand='md'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <Form inline>
            <Form.Control
              type='text'
              placeholder='i am looking for a ... '
              className='mr-sm-2'
            />
          </Form>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav activeKey={window.location.pathname}>
              {/*<LinkContainer to = '/create_account'>
                <Nav.Link> Create Account </Nav.Link>
              </LinkContainer>
              */}
              <LinkContainer to='/login'>
                <Nav.Link> Log In </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/my_account'>
                <Nav.Link> My Account </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Routes />
    </div>
  );
}

export default App;
