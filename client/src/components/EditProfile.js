import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createUser } from '../redux/actions/users';

const EditProfile = () =>{
    const musician_name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const instrument_1 = sessionStorage.getItem('instrument_1');
    const instrument_2 = sessionStorage.getItem('instrument_2');
    const genre = sessionStorage.getItem('genre');
    const bio = sessionStorage.getItem('bio');
    let portfolio = sessionStorage.getItem('portfolio');
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
      const handleSubmit = (event) => {
        sessionStorage.setItem('isAuthenticated', true);
        console.log(userData.name);
        console.log(userData.email);
        sessionStorage.setItem('type', userData.type);
        sessionStorage.setItem('name', userData.name);
        // sessionStorage.setItem('email', userData.email);
        // sessionStorage.setItem('instrument_1', userData.instrument_1);
        // sessionStorage.setItem('instrument_2', userData.instrument_2);
        // sessionStorage.setItem('genre', userData.genre);
        sessionStorage.setItem('bio', userData.bio);
        // sessionStorage.setItem('portfolio', userData.portfolio);
          
      }

    if (sessionStorage.getItem('type')=='Musician'){
        return(
            <div>
                <h1>Edit Profile</h1>
        <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder={musician_name}
            defaultValue={musician_name}
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder={email}
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <Form.Text className='text-muted'>
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
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId='genre'>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type='genre'
            placeholder={genre}
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
                defaultValue={instrument_1}
                value={userData.instrument_1}
                onChange={(e) =>
                  setUserData({ ...userData, instrument_1: e.target.value })
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

          <Form.Group as={Col} controlId='primaryExpertise'>
            <Form.Label>Level of Expertise</Form.Label>
            <br />
            <div key='expertise-radio1' className='mb-3'>
              {[1, 2, 3, 4, 5].map((index) => (
                <Form.Check
                  inline
                  label={index}
                  type='radio'
                  // id={`inline-radio-${index}`}
                  id='inline-radio-1'
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
                defaultValue={instrument_2}
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

          <Form.Group as={Col} controlId='secondaryExpertise'>
            <Form.Label>Level of Expertise</Form.Label>
            <br />
            <div key='expertise-radio2' className='mb-3'>
              {[1, 2, 3, 4, 5].map((index) => (
                <Form.Check
                  inline
                  label={index}
                  type='radio'
                  // id={`inline-radio-${index}`}
                  id='inline-radio-2'
                  value={index}
                />
              ))}
            </div>
          </Form.Group>
        </Row>

        <Form.Group controlId='portfolio'>
          <Form.Label>Portfolio Link</Form.Label>
          <Form.Control placeholder={portfolio} />
        </Form.Group>
        {/* value={userData.description}
            onChange={(e) =>
              setUserData({ ...userData, description: e.target.value })
            } */}
        <Form.Group controlId='moreInfo'>
          <Form.Label>More Info</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder={bio}
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
            </div>
            
            
            
        )
    }

    

}

export default EditProfile;