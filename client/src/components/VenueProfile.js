// Import React
import React from 'react';

// Import bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

// Venue Profile Card
function VenueProfile(props) {
  return (
    <Card className='card--venue'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.city}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer
            to={{
              pathname: '/venue-info',
              state: {
                venue_name: props.name,
                email: props.email,
                password: props.password,
                address: props.address,
                city: props.city,
                state: props.state,
                zip: props.zip,
                description: props.description,
                yelp: props.yelp,
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
