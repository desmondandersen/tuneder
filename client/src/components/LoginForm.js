// Import React
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';

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
const Login = () => {
  let history = useHistory();

  // retrieve all emails and passwords 
  const all_users = useSelector((state) => state.users);

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

  function handleLogin() {
    for (var i = 0; i < all_users.length; i++) {
      if(username == all_users[i].email) {
        if(password == all_users[i].password) {
          console.log("Successful login");
          sessionStorage.setItem('isAuthenticated', true);

          if(all_users[i].type == 'Venue') 
          {
            sessionStorage.setItem('type', all_users[i].type);
            sessionStorage.setItem('name', all_users[i].name);
            sessionStorage.setItem('email', all_users[i].email);
            sessionStorage.setItem('address', all_users[i].address);
            sessionStorage.setItem('city', all_users[i].city);
            sessionStorage.setItem('state', all_users[i].state);
            sessionStorage.setItem('zip', all_users[i].audience_size);
            sessionStorage.setItem('description', all_users[i].description);
          }
          else 
          {
            sessionStorage.setItem('type', all_users[i].type);
            sessionStorage.setItem('name', all_users[i].name);
            sessionStorage.setItem('email', all_users[i].email);
            sessionStorage.setItem('instrument_1', all_users[i].instrument_1);
            sessionStorage.setItem('instrument_2', all_users[i].instrument_2);
            sessionStorage.setItem('genre', all_users[i].genre);
            sessionStorage.setItem('bio', all_users[i].bio);
            sessionStorage.setItem('portfolio', all_users[i].portfolio);
          }

          history.push('/')
          break;
        }
        else{
          console.log("Incorrect password.");
        }
      }
      else {
        console.log("A user with that email does not exist.");
      }
    }
  }

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
        <Button id='submitButton' type='submit' disabled={!validSubmission()} onClick={() => {handleLogin()}}>
            Login
        </Button>

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


