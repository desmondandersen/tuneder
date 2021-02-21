import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VenueProfile from './VenueProfile';
import PersonProfile from './PersonProfile';

//import { Button } from "bootstrap";

// to be replaced with database info
const venues = [
  {
    name: "Geraldo's Pub",
    artist: 'Rock Cover Band',
  },
  {
    name: 'Whiskey-A-Go-Go',
    artist: 'Folk Solo',
  },
  {
    name: 'Dodger Stadium',
    artist: 'U2',
  },
  {
    name: "Joe's Backyard",
    artist: 'Mariachi Band',
  },
];
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
  return (
    <div className='Home'>
      <Container>
        <Row>
          <Col>
            <Button style={({ margin: '10px' }, { width: '100%' })}>
              See all venues
            </Button>
            <div className='Venues'>
              {venues.map((venue) => {
                return (
                  <VenueProfile
                    name={venue.name}
                    artist={venue.artist}
                    key={venue.name}
                  />
                );
              })}
            </div>
          </Col>
          <div>
            <Button style={({ marginTop: '10px' }, { width: '100%' })}>
              See more musicians
            </Button>
            <Row>
              <Col>
                <div className='People'>
                  {musicians.map((person) => {
                    return (
                      <PersonProfile
                        name={person.name}
                        instrument={person.instrument}
                        genre={person.genre}
                        key={person.name}
                      />
                    );
                  })}
                </div>
              </Col>
              <Col>
                <div className='People'>
                  {musicians.map((person) => {
                    return (
                      <PersonProfile
                        name={person.name}
                        instrument={person.instrument}
                        genre={person.genre}
                        key={person.name}
                      />
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}
