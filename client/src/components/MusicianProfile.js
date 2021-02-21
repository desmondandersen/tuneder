import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MusicianProfile = (props) => {
  return (
    <Card className='card--musician'>
      <Card.Body>
        <Card.Title>{props.instrument}</Card.Title>
        <Card.Subtitle>{props.genre}</Card.Subtitle>
        <Card.Text>{props.name}</Card.Text>
        <Button variant='primary'>Full profile</Button>
      </Card.Body>
    </Card>
  );
};

export default MusicianProfile;
