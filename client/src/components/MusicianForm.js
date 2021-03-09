// Import React and Redux
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser, updateUser } from '../redux/actions/users';

// Import bootstrap components
import { Form, Button, Row, Col } from 'react-bootstrap';

// Musician Form Page
const MusicianForm = ({ currentId }) => {
  const [userData, setUserData] = useState({
    type: 'Musician',
    name: '',
    email: '',
    password: '',
    instrument_1: '',
    expertise_1: '',
    instrument_2: '',
    expertise_2: '',
    genre: '',
    portfolio: '',
    bio: '',
  });

  const user = useSelector((state) =>
    currentId ? state.users.find((u) => u._id === currentId) : null
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const heading = currentId
    ? 'Edit Musician Profile'
    : 'Create Musician Profile';

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updateUser(currentId, userData));
    } else {
      dispatch(createUser(userData));
    }

    sessionStorage.setItem('isAuthenticated', true);
    sessionStorage.setItem('id', userData._id);
    sessionStorage.setItem('type', userData.type);

    history.push('/');
  };

  return (
    <div className='form--musician'>
      <h1>{heading}</h1>
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
          <Col>
            <Form.Group controlId='primaryExpertise'>
              <Form.Label>Primary Instrument Expertise Level</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Select'
                value={userData.expertise_1}
                onChange={(e) =>
                  setUserData({ ...userData, expertise_1: e.target.value })
                }
                required
              >
                <option name='Select'>Select</option>
                <option name='Beginner'>Beginner</option>
                <option name='Intermediate'>Intermediate</option>
                <option name='Advanced'>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
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
          <Col>
            <Form.Group controlId='secondaryExpertise'>
              <Form.Label>Secondary Instrument Expertise Level</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Select'
                value={userData.expertise_2}
                onChange={(e) =>
                  setUserData({ ...userData, expertise_2: e.target.value })
                }
              >
                <option name='Select'>Select</option>
                <option name='Beginner'>Beginner</option>
                <option name='Intermediate'>Intermediate</option>
                <option name='Advanced'>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId='portfolio'>
          <Form.Label>Portfolio Link</Form.Label>
          <Form.Control
            placeholder='Youtube Link'
            value={userData.portfolio}
            onChange={(e) =>
              setUserData({ ...userData, portfolio: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId='moreInfo'>
          <Form.Label>More Info</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder='Enter a short bio or any other info you want on your profile'
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
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

export default MusicianForm;
