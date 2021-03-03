import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import VenueProfile from './VenueProfile';
import MusicianProfile from './MusicianProfile';

import { useSelector } from 'react-redux';

export default function Home() {
  /*logic to import all venues and musicians, 
  then put them in separate arrays*/
  const all = useSelector((state) => state.users);
  const venues = [];
  const musicians = [];
  for (var i = 0; i < all.length; i++) {
    if (all[i].type === 'Venue') venues.push(all[i]);
    else musicians.push(all[i]);
  }

  /* separate musicians array into 2 separate columns */
  const musicians1 = [];
  const musicians2 = [];
  for (var j = 0; j < musicians.length; j++) {
    if (j % 2 == 0) musicians1.push(musicians[j]);
    else musicians2.push(musicians[j]);
  }

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
        <Row></Row>
        <Row>
          <Col>
            <h2>Venues</h2>
            {venues.map((venue, key) => {
              return (
                <VenueProfile
                  name={venue.name}
                  email={venue.email}
                  password={venue.password}
                  location={venue.location}
                  description={venue.description}
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
                {musicians1.map((person, key) => {
                  return (
                    <MusicianProfile
                      name={person.name}
                      instrument={person.instrument1}
                      genre={person.genre}
                      key={key}
                    />
                  );
                })}
              </Col>
              <Col>
                {musicians2.map((person, key) => {
                  return (
                    <MusicianProfile
                      name={person.name}
                      instrument={person.instrument1}
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
