import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

export default function Login() {
  // Create constructor for username, password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Validate login items
  function validSubmission() {
    return username.length > 2 && password.length;
  }

  function handleSubmit() {
    console.log('Logging in...');
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
            type = 'password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* if login info is valid, the button brings you to home. if not, button is disabled*/}
        <Link to='/'>
          <Button id='submitButton' type='submit' disabled={!validSubmission()}>
            Login
          </Button>
        </Link>

        <p className='text-right'>
          <Link class = 'custom-link' to='/create-account'>Create Account</Link>
        </p>
      </Form>
    </div>
  );
}
