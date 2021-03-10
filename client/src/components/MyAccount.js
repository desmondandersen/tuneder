// Import React
import React from 'react';
import { withRouter } from 'react-router';

// Import bootstrap components
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// Import components
import MusicianForm from './MusicianForm';
import VenueForm from './VenueForm';
import NavBar from './NavBar';

const MyAccount = () => {
  const isLoggedIn = sessionStorage.getItem('isAuthenticated');
  const id = sessionStorage.getItem('id');
  const type = sessionStorage.getItem('type');

  if (isLoggedIn && type === 'Venue') {
    return <VenueForm currentId={id} />;
  } else if (isLoggedIn && type === 'Musician') {
    return <MusicianForm currentId={id} />;
  } else {
    return (
      <>
        <NavBar />
        <h1>Please log in</h1>
        <NavLink to='/login'>
          <Button variant='primary'>Login</Button>
        </NavLink>{' '}
        <NavLink to='/'>
          <Button variant='secondary'>Back to Home</Button>
        </NavLink>
      </>
    );
  }
};

export default withRouter(MyAccount);
