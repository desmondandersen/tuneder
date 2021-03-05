import React from 'react';

// Import bootstrap components
import { Nav, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Musician Profile Card
const MusicianProfile = (props) => {
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
                instrument_one: props.instrument_one,
                instrument_two: props.instrument_two,
                genre: props.genre,
                portfolio_link: props.portfolio_link,
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
