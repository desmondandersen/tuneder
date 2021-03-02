import React from 'react';
import { useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function VenueProfile(props) {
  //const venues = useSelector((state) => state.venues);

  return (
    <Card className='card--venue'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.artist}</Card.Text>
        <Button variant='primary'>Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default VenueProfile;
