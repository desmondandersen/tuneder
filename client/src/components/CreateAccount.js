import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
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
}
