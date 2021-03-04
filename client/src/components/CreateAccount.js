// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Import bootstrap components
import Button from 'react-bootstrap/Button';

// Create Account Page
const CreateAccount = () => {
  return (
    <div className='user-input'>
      <p>I am a...</p>
      <Link to='/new-musician'>
        <Button>Musician</Button>
      </Link>
      <br />
      <br />
      <Link to='/new-venue'>
        <Button>Venue</Button>
      </Link>
    </div>
  );
};

export default CreateAccount;
