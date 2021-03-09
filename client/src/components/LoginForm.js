// Import React
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';

// Import bootstrap components
import { Form, Button } from 'react-bootstrap';

// Login Page
const Login = () => {
  const [login, setLogin] = useState(0);
  let history = useHistory();

  // retrieve all emails and passwords
  const all_users = useSelector((state) => state.users);

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

  function handleLogin() {
    setLogin(1);
    console.log('Logging in...');
    console.log(login);
    for (let i = 0; i < all_users.length; i++) {
      if (username === all_users[i].email) {
        if (password === all_users[i].password) {
          console.log('Successful login');
          sessionStorage.setItem('isAuthenticated', true);

          if (all_users[i].type === 'Venue') {
            sessionStorage.setItem('id', all_users[i]._id);
            sessionStorage.setItem('type', all_users[i].type);
          } else {
            console.log(all_users[i]);
            sessionStorage.setItem('id', all_users[i]._id);
            sessionStorage.setItem('type', all_users[i].type);
          }

          history.push('/');
          break;
        } else {
          console.log('Incorrect password.');
          alert('Incorrect Password.');
        }
      } else {
        console.log('A user with that email does not exist.');
      }
    }
  }
  if (sessionStorage.getItem('isAuthenticated')) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  } else {
    return (
      <div className='user-input'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='username'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              placeholder='email'
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
          <Link className='custom-link' to='/'>
            <Button
              id='submitButton'
              type='button'
              disabled={!validSubmission()}
              onClick={() => {
                handleLogin();
              }}
            >
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
  }
};

export default Login;
