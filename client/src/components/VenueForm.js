import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createVenue } from '../actions/venues';

const VenueForm = () => {
  const [venueData, setVenueData] = useState({
    name: '',
    email: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createVenue(venueData));
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
            value={venueData.name}
            onChange={(e) =>
              setVenueData({ ...venueData, name: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={venueData.email}
            onChange={(e) =>
              setVenueData({ ...venueData, email: e.target.value })
            }
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={venueData.password}
            onChange={(e) =>
              setVenueData({ ...venueData, password: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            placeholder='Anytown, CA, USA'
            value={venueData.location}
            onChange={(e) =>
              setVenueData({ ...venueData, location: e.target.value })
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
          <Form.Control as='select'
            value={venueData.audience_size}
            onChange={(e) =>
              setVenueData({ ...venueData, audience_size: e.target.value })
            }
            required>
            <option name = 'null'>Select</option>
            <option name = '<30'>Less than 30</option>
            <option name = '30-99'>30-99</option>
            <option name = '100-200'>100-200</option>
            <option name = '>200'>More than 200</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='Info'>
          <Form.Label>
            Tell musicians about your show openings!{' '}
          </Form.Label>
          <Form.Control as='textarea' rows={3} 
            value={venueData.description}
            onChange={(e) =>
              setVenueData({ ...venueData, description: e.target.value })
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
