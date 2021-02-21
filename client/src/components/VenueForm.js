import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  // handleChange(event) {
  //   this.setState({
  //     value: Array.from(event.target.selectedOptions, (item) => item.value),
  //   });
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createVenue(venueData)); // dispatch action
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
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* 
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group>
          <Form.File
            id='venuepic'
            label='Upload a picture of the venue'
            custom
          />
        </Form.Group>
        <Form.Group controlId='audience size'>
          <Form.Label>What is the size of your audience?</Form.Label>
          <Form.Control as='select'>
            <option>Less than 30</option>
            <option>30-99</option>
            <option>100-200</option>
            <option>More than 200</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='Info'>
          <Form.Label>
            Tell potential musicians/bands about your venue!{' '}
          </Form.Label>
          <Form.Control as='textarea' rows={7} />
        </Form.Group> */}

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default VenueForm;
