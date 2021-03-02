import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import VenueProfile from './VenueProfile';
import MusicianProfile from './MusicianProfile';

import { useSelector } from 'react-redux';


const musicians = [
  {
    name: 'Joshua Homme',
    instrument: 'Guitar',
    genre: 'Desert Rock',
  },
  {
    name: 'John Paul Jones',
    instrument: 'Bass, Keys',
    genre: 'Heavy Rock',
  },
  {
    name: 'Dave Grohl',
    instrument: 'Drums',
    genre: 'Heavy Rock',
  },
];


export default function Home() {
  const venues = useSelector((state) => state.venues);

  return (
    <div className='Home'>
      {/*
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={slideImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={slideImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={slideImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
      */}

      <Container>
        <Row>
          
        </Row>
        <Row>
          <Col>
            <h2>Venues</h2>
            {venues.map((venue, key) => {
              return (
                <VenueProfile
                  name={venue.name}
                  artist={venue.artist}
                  key={key}
                />
              );
            })}
            <Button style={{ width: '100%' }}>See all venues</Button>
          </Col>
          <div>
            <h2>Musicians</h2>
            <Row>
              <Col>
                {musicians.map((person, key) => {
                  return (
                    <MusicianProfile
                      name={person.name}
                      instrument={person.instrument}
                      genre={person.genre}
                      key={key}
                    />
                  );
                })}
              </Col>
              <Col>
                {musicians.map((person, key) => {
                  return (
                    <MusicianProfile
                      name={person.name}
                      instrument={person.instrument}
                      genre={person.genre}
                      key={key}
                    />
                  );
                })}
              </Col>
            </Row>
            <Button style={{ width: '100%' }}>See more musicians</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
