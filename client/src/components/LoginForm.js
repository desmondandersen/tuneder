// Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import bootstrap components
import { Form, Button } from 'react-bootstrap';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 

// Login Page
export default function Login({setToken}) {
  // Create constructor for username, password
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Validate login items
  function validSubmission() {
    return true;
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
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
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* if login info is valid, the button brings you to home. if not, button is disabled*/}
        <Link to='/account'>
          <Button id='submitButton' type='submit' disabled={!validSubmission()}>
            Login
          </Button>
        </Link>

        <p className='text-right'>
          <Link className='custom-link' to='/create-account'>
            Create Account
          </Link>
        </p>
      </Form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}


