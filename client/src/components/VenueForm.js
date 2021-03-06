// Import React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser } from '../redux/actions/users';

// Import bootstrap components
import { Form, Button, Row, Col } from 'react-bootstrap';

// Venue Form Page
const VenueForm = () => {
  const [userData, setUserData] = useState({
    type: 'Venue',
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
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

        <Row>
          <Col>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
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
                Your email is what other users will use to contact you.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId='address'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Street Address'
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md='6' controlId='city'>
            {/* <Form.Label>City</Form.Label> */}
            <Form.Control
              type='text'
              placeholder='City'
              name='city'
              value={userData.city}
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group as={Col} md='3' controlId='state'>
            {/* <Form.Label>State</Form.Label> */}
            <Form.Control
              type='text'
              placeholder='State'
              name='state'
              value={userData.state}
              onChange={(e) =>
                setUserData({ ...userData, state: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group as={Col} md='3' controlId='zip'>
            {/* <Form.Label>Zip</Form.Label> */}
            <Form.Control
              type='text'
              placeholder='Zip'
              name='zip'
              value={userData.zip}
              onChange={(e) =>
                setUserData({ ...userData, zip: e.target.value })
              }
              required
            />
          </Form.Group>
        </Form.Row>

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

        <Form.Group controlId='yelp'>
          <Form.Label>Social Media Links</Form.Label>
          <Form.Control
            placeholder='Yelp, Facebook, Instagram, etc.'
            value={userData.yelp}
            onChange={(e) =>
              setUserData({ ...userData, yelp: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group controlId='Info'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Tell musicians about your show openings!'
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
