// Import React
import React from 'react';

// Import bootstrap components
import { Nav, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Venue Profile Card
function VenueProfile(props) {
  return (
    <Card className='card--venue'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.artist}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer
            to={{
              pathname: '/venue-info',
              state: {
                venue_name: props.name,
                email: props.email,
                password: props.password,
                location: props.location,
                description: props.description,
              },
            }}
          >
            <Nav.Link>
              <Button variant='primary'>Learn more</Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Card.Body>
    </Card>
  );
}

export default VenueProfile;
