// Import React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { createUser } from '../redux/actions/users';

// Import bootstrap components
import { Form, Button, Row, Col } from 'react-bootstrap';

// Musician Form Page
const MusicianForm = () => {
  const [userData, setUserData] = useState({
    type: 'Musician',
    name: '',
    email: '',
    password: '',
    instrument_1: '',
    instrument_2: '',
    genre: '',
    portfolio: '',
    bio: '',
  });

  const dispatch = useDispatch();
  let history = useHistory();

  // function validPassword() {
  //   return password.length > 4;
  // }
  // function validName() {
  //   return firstName.length > 0;
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!validPassword()) {
    //   alert('Password too short. Change and resubmit');
    //   return;
    // }
    // if (!validName()) {
    //   alert('First Name is a required field. Please fill it in and resubmit.');
    //   return;
    // }
    dispatch(createUser(userData));

    sessionStorage.setItem('isAuthenticated', true);
    sessionStorage.setItem('type', userData.type);
    sessionStorage.setItem('name', userData.name);
    sessionStorage.setItem('email', userData.email);
    sessionStorage.setItem('instrument_1', userData.instrument_1);
    sessionStorage.setItem('instrument_2', userData.instrument_2);
    sessionStorage.setItem('genre', userData.genre);
    sessionStorage.setItem('bio', userData.bio);
    sessionStorage.setItem('portfolio', userData.portfolio);

    //history.push('/');
  };

  return (
    <div className='form--musician'>
      <h1>Create a new Musician Profile!</h1>
      <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name of artist or group'
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

        <Form.Group controlId='genre'>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type='genre'
            placeholder='List your preferred genre(s) to perform'
            value={userData.genre}
            onChange={(e) =>
              setUserData({ ...userData, genre: e.target.value })
            }
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId='primaryInstrument'>
              <Form.Label>Primary Instrument</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Select'
                value={userData.instrument_1}
                onChange={(e) =>
                  setUserData({ ...userData, instrument_1: e.target.value })
                }
                required
              >
                <option name='Select'>Select</option>
                <option name='Drums'>Drums</option>
                <option name='Piano'>Piano</option>
                <option name='Guitar'>Guitar</option>
                <option name='Bass'>Bass</option>
                <option name='Vocals'>Vocals</option>
                <option name='Other'>Other (add to notes section)</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Form.Group as={Col} controlId='primaryExpertise'>
            <Form.Label>Level of Expertise</Form.Label>
            <br />
            <div key='inline-radio' className='mb-3'>
              {[1, 2, 3, 4, 5].map((index) => (
                <Form.Check
                  inline
                  label={index}
                  type='radio'
                  id={`inline-radio-${index}`}
                  value={index}
                />
              ))}
            </div>
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId='secondaryInstrument'>
              <Form.Label>Secondary Instrument</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Select'
                value={userData.instrument_2}
                onChange={(e) =>
                  setUserData({ ...userData, instrument_2: e.target.value })
                }
                required
              >
                <option name='Select'>Select</option>
                <option name='Drums'>Drums</option>
                <option name='Piano'>Piano</option>
                <option name='Guitar'>Guitar</option>
                <option name='Bass'>Bass</option>
                <option name='Vocals'>Vocals</option>
                <option name='Other'>Other (add to notes section)</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Form.Group as={Col} controlId='secondaryExpertise'>
            <Form.Label>Level of Expertise</Form.Label>
            <br />
            <div key='inline-radio' className='mb-3'>
              {[1, 2, 3, 4, 5].map((index) => (
                <Form.Check
                  inline
                  label={index}
                  type='radio'
                  id={`inline-radio-${index}`}
                  value={index}
                />
              ))}
            </div>
          </Form.Group>
        </Row>

        <Form.Group controlId='portfolio'>
          <Form.Label>Portfolio Link</Form.Label>
          <Form.Control placeholder='Youtube Link' />
        </Form.Group>

        <Form.Group controlId='moreInfo'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder='Enter a short bio or any other info you want on your profile'
            value={userData.notes}
            onChange={(e) => setUserData({ ...userData, bio: e.target.bio })}
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

export default withRouter(MusicianForm);
