import React from 'react';

// Import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

// Musician Profile Card
const MusicianProfile = (props) => {
  return (
    <Card className='card--musician'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.instrument_1}</Card.Subtitle>
        <Card.Text>{props.genre}</Card.Text>
        <Nav>
          <LinkContainer
            to={{
              pathname: '/musician-info',
              state: {
                musician_name: props.name,
                email: props.email,
                instrument_1: props.instrument_1,
                expertise_1: props.expertise_1,
                instrument_2: props.instrument_2,
                expertise_2: props.expertise_2,
                genre: props.genre,
                bio: props.bio,
                portfolio: props.portfolio,
              },
            }}
          >
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
