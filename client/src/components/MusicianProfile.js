import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const MusicianProfile = (props) => {
  return (
    <Card className='card--musician'>
      <Card.Body>
        <Card.Title>{props.instrument_one}</Card.Title>
        <Card.Subtitle>{props.genre}</Card.Subtitle>
        <Card.Text>{props.name}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to={{
            pathname: '/musician-info',
            state: {
              musician_name: props.name,
              email: props.email,
              instrument_one: props.instrument_one,
              instrument_two: props.instrument_two,
              genre: props.genre,
            }
            }}>
            <Nav.Link>
              <Button variant='primary'>Full Profile</Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default MusicianProfile;
