import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const MusicianProfile = (props) => {
  return (
    <Card className='card--musician'>
      <Card.Body>
        <Card.Title>{props.instrument}</Card.Title>
        <Card.Subtitle>{props.genre}</Card.Subtitle>
        <Card.Text>{props.name}</Card.Text>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to={{
            pathname: '/musician-info',
            state: {
              musician_name: props.name,
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
};

export default MusicianProfile;
