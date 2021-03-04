import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import VenueProfile from './VenueProfile';
import MusicianProfile from './MusicianProfile';

import { useSelector } from 'react-redux';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import guitar_pic from '../pictures/guitarist.png';
import band_pic from '../pictures/band.png';
import venue_pic from '../pictures/venue.png';

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

      <Container>
        <h1>Welcome to Tuneder!</h1>
        <hr/>
          <Fade class = 'slideshow'>
            <div className="each-fade">
              <div className="image-container">
                <img src={guitar_pic} className = "photo" />
              </div>
              <h4 class = 'caption'>Meet talented freelance musicians!</h4>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={band_pic} className = "photo"/>
              </div>
              <h4 class = 'caption'>Find a member for your band!</h4>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={venue_pic} className = "photo" />
              </div>
              <h4 class = 'caption'>Explore local venues looking to hire!</h4>
            </div>
          </Fade>
        <Row></Row>
        <hr/>
        <Row>
          <Col>
            <h2>Venues</h2>
            {venues.map((venue, key) => {
              return (
                <VenueProfile
                  name={venue.name}
                  email={venue.email}
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
              <div>
                <Col>
                  {musicians1.map((person, key) => {
                    return (
                      <MusicianProfile
                        name={person.name}
                        email={person.email}
                        instrument_one={person.instrument1}
                        instrument_two={person.instrument2}
                        genre={person.genre}
                        key={key}
                      />
                    );
                  })}
                </Col>
              </div>
              <div>
                <Col>
                  {musicians2.map((person, key) => {
                    return (
                      <MusicianProfile
                        name={person.name}
                        email={person.email}
                        instrument_one={person.instrument1}
                        instrument_two={person.instrument2}
                        genre={person.genre}
                        key={key}
                      />
                    );
                  })}
                </Col>
              </div>
            </Row>
            <Button style={{ width: '100%' }}>See more musicians</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
