import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function Login() {
  //create constructor for username, password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //make sure entries are valid TODO: 0 length for now, but change to 5 & 5
  function validSubmission() {
    return username.length > 2 && password.length > 4;
  }

  function handleSubmit() {
    console.log('logged in');

  }

  return (
    <div className='user-input'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* if login info is valid, the button brings you to home. if not, button is disabled*/}
        <Link to = '/'>
          <Button id='submitButton' type='submit' disabled={!validSubmission()}>
            Login
          </Button>
        </Link>
        

        <p class='text-right'>
          <LinkContainer to='/create-account'>
            <Link> Create Account</Link>
          </LinkContainer>
        </p>
      </Form>
    </div>
  );
}
