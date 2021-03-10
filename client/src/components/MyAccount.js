// Import React
import React from 'react';
import { useSelector } from 'react-redux';

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
  const email = sessionStorage.getItem('email');
  const type = sessionStorage.getItem('type');

  const all_users = useSelector((state) => state.users);
  if (isLoggedIn && id === 'undefined') {
    for (let i = 0; i < all_users.length; i++) {
      if (email === all_users[i].email) {
        sessionStorage.setItem('id', all_users[i]._id);
        console.log(all_users[i]);
      }
    }
  }

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

export default MyAccount;
