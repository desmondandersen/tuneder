import React, { useEffect } from 'react';
import { useDispatch, batch } from 'react-redux';

import { getVenues } from './actions/venues.js';
// import { getMusicians } from './actions/musicians.js';
import Routes from './Routes.js';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

//import combineReducers from './reducers/index';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      // dispatch(getMusicians());
      dispatch(getVenues());
    })
  }, [dispatch]);

  return (
    <div className='app'>
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
