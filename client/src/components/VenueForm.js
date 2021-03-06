// Import React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser } from '../redux/actions/users';

// Import bootstrap components
import { Form, Button } from 'react-bootstrap';

// Venue Form Page
const VenueForm = () => {
  const [userData, setUserData] = useState({
    type: 'Venue',
    name: '',
    email: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(userData));
    history.push('/');
  };

  return (
    <div className='form--venue'>
      <h1>Create a Venue</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Venue Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name of venue'
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <Form.Text className='text-muted'>
          Your email is what others will use to contact you!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            placeholder='Anytown, CA, USA'
            value={userData.location}
            onChange={(e) =>
              setUserData({ ...userData, location: e.target.value })
            }
            required
          />
          <Form.Text className='text-muted'>
            Please enter in form Town, State, Country
          </Form.Text>
        </Form.Group>

        {/*
        <Form.Group>
          <Form.File
            id='venuepic'
            label='Upload a picture of the venue'
            custom
          />
        </Form.Group>
        */}

        <Form.Group controlId='audience_size'>
          <Form.Label>What is the size of your audience?</Form.Label>
          <Form.Control
            as='select'
            value={userData.audience_size}
            onChange={(e) =>
              setUserData({ ...userData, audience_size: e.target.value })
            }
            required
          >
            <option name='null'>Select</option>
            <option name='<30'>Less than 30</option>
            <option name='30-99'>30-99</option>
            <option name='100-200'>100-200</option>
            <option name='>200'>More than 200</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='Info'>
          <Form.Label>Tell musicians about your show openings! </Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={userData.description}
            onChange={(e) =>
              setUserData({ ...userData, description: e.target.value })
            }
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default VenueForm;
