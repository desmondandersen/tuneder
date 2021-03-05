// Import React and Redux
import React from 'react';
import { useSelector } from 'react-redux';

// Import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Import components
import VenueProfile from './VenueProfile';
import MusicianProfile from './MusicianProfile';
import Slideshow from './Slideshow';

// Home Page
const Home = () => {
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
    if (j % 2 === 0) musicians1.push(musicians[j]);
    else musicians2.push(musicians[j]);
  }

  return (
    <div className='home'>
      <Slideshow />
      <Container>
        <Row>
          <Col>
            <h2>Venues</h2>
            {venues.map((venue, key) => {
              return (
                <VenueProfile
                  name={venue.name}
                  email={venue.email}
                  address={venue.address}
                  city={venue.city}
                  state={venue.state}
                  zip={venue.zip}
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
                        instrument_1={person.instrument_1}
                        instrument_2={person.instrument_2}
                        genre={person.genre}
                        bio={person.bio}
                        portfolio={person.portfolio}
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
                        instrument_1={person.instrument_1}
                        instrument_2={person.instrument_2}
                        genre={person.genre}
                        bio={person.bio}
                        portfolio={person.portfolio}
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
};

export default Home;
