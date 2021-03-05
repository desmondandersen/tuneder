import React from 'react';

// Import bootstrap components
import { Nav, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Musician Profile Card
const MusicianProfile = (props) => {
  console.log(props.name + ': ' + props.instrument_1);
  return (
    <Card className='card--musician'>
      <Card.Body>
        <Card.Title>{props.instrument_one}</Card.Title>
        <Card.Subtitle>{props.genre}</Card.Subtitle>
        <Card.Text>{props.name}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer
            to={{
              pathname: '/musician-info',
              state: {
                musician_name: props.name,
                email: props.email,
                instrument_1: props.instrument_1,
                instrument_2: props.instrument_2,
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
