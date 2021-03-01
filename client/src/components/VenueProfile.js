import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const handleOnSubmit = props => {
  props.history.push({
    pathname: '/venue-info',
    state: {
      venue_name: this.props.name,
      email: "test_email", 
      city: "test_city",
      phone: "test_phone",
    }
  });
};

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
        {/* <Button variant='primary'>Learn more</Button> */}
      </Card.Body>
    </Card>
  );
}

export default VenueProfile;
