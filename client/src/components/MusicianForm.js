import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

const MusicianForm = () => {
  const [firstName, setfirstName] = useState('');
  const [password, setPassword] = useState('');

  function validPassword() {
    return password.length > 4;
  }
  function validName() {
    return firstName.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validPassword()) {
      alert('Password too short. Change and resubmit');
      return;
    }
    if (!validName()) {
      alert('First Name is a required field. Please fill it in and resubmit.');
      return;
    }
    alert('You submitted the form');
  };
  return (
    <div className='form--musician'>
      <h1>Create A New Musician Profile!</h1>
      <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Row>
          <Col md={4}>
            <Form.Group controlId='firstname'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter first name'
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group controlId='lastname'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='name' placeholder='Enter last name' />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={4}>
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.File id='profilepic' label='Upload a profile picture' />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col md={9}>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='5 characters minimum'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={9}>
            <Form.Group controlId='location'>
              <Form.Label>Location</Form.Label>
              <Form.Control type='location' placeholder='Anytown, CA, USA' />
              <Form.Text className='text-muted'>
                Please enter in form Town, State, Country
              </Form.Text>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={7}>
            <Form.Group controlId='primaryInstrument'>
              <Form.Label>Primary Instrument</Form.Label>
              <Form.Control as='select'>
                <option>Drums</option>
                <option>Piano</option>
                <option>Guitar</option>
                <option>Bass</option>
                <option>Vocals</option>
                <option>Other, add in notes section</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='primaryexpertise'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3'>
                  <br></br>
                  <Form.Label>Level of Expertise:  </Form.Label>
                  
                  <Form.Check
                    inline
                    label='1'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label='2'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label='3'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label='4'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label='5'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={7}>
            <Form.Group controlId='secondaryInstrument'>
              <Form.Label>Secondary Instrument</Form.Label>
              <Form.Control as='select'>
                <option>Drums</option>
                <option>Piano</option>
                <option>Guitar</option>
                <option>Bass</option>
                <option>Vocals</option>
                <option>Other, add in notes section</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='secondaryexpertise'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3'>
                  <br></br>
                  <Form.Label>Level of Expertise: </Form.Label>
                  <Form.Check
                    inline
                    label='1'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label='2'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label='3'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label='4'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label='5'
                    type={type}
                    name='expertise'
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>
          </Col>
        </Form.Row>

        <Col md={7}>
          <Form.Group controlId='moreInfo'>
            <Form.Label>
              Short Bio, and any other info you want on your profile
            </Form.Label>
            <Form.Control as='textarea' rows={7} />
          </Form.Group>
        </Col>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MusicianForm;
