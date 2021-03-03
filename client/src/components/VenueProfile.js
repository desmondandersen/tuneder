import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function VenueProfile(props) {
  return (
    <Card className='card--venue'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.artist}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to={{
            pathname: '/venue-info',
            state: {
              venue_name: props.name,
              email: "test_email",
              city: "test_city",
              phone: "test_phone",
            }
            }}>
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
