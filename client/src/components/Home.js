// Import React and Redux
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Import components
import VenueProfile from './VenueProfile';
import MusicianProfile from './MusicianProfile';
import Slideshow from './Slideshow';

// Home Page
const Home = () => {
  // Declare number of musician cards shown
  const [nCards, setNCards] = useState(0);
  // Declare number of venue cards shown
  const [nVenueCards, setNVenueCards] = useState(0);

  // Logic to import all venues and musicians, then put them in separate arrays
  const all = useSelector((state) => state.users);
  let venues = [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let musicians = [];
  for (var i = 0; i < all.length; i++) {
    if (all[i].type === 'Venue') venues.push(all[i]);
    else musicians.push(all[i]);
  }
  // Separate musicians array into 2 separate columns
  const [musicians1, setMusicians1] = useState(musicians);
  const [musicians2, setMusicians2] = useState([]);
  // Setup search logic
  const [searchTerm, setSearchTerm] = useState('');

  // Create useEffect hook for initial loading
  useEffect(() => {
    const results = musicians.filter((musician) =>
      musician.instrument_1.toLowerCase().includes('')
    );
    const musicians1Results = [];
    const musicians2Results = [];
    for (var j = 0; j < results.length; j++) {
      if (j % 2 === 0) musicians1Results.push(results[j]);
      else musicians2Results.push(results[j]);
    }
    setMusicians1(musicians1Results);
    setMusicians2(musicians2Results);
    // set nCards back to 4
    setNCards(4);
    setNVenueCards(4);
  }, [all]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Update musicians arrays for real-time search
  useEffect(() => {
    const results = musicians.filter((musician) =>
      musician.instrument_1
        .concat(musician.name)
        .concat(musician.genre)
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    const musicians1Results = [];
    const musicians2Results = [];
    for (var j = 0; j < results.length; j++) {
      if (j % 2 === 0) musicians1Results.push(results[j]);
      else musicians2Results.push(results[j]);
    }
    setMusicians1(musicians1Results);
    setMusicians2(musicians2Results);
  }, [searchTerm]);

  // Functions to increment number of showing cards
  const clickMoreMusician = (event) => {
    setNCards(nCards + 4);
  };
  const clickMoreVenue = (event) => {
    setNVenueCards(nVenueCards + 4);
  };

  return (
    <div className='home'>
      <Form inline>
        <Form.Control
          type='text'
          placeholder='Search'
          className='search'
          width='320px'
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
      <Slideshow />
      <Container>
        <Row>
          <Col>
            <h2>Venues</h2>
            {venues.slice(0, nVenueCards).map((venue, key) => {
              return (
                <VenueProfile
                  name={venue.name}
                  email={venue.email}
                  address={venue.address}
                  city={venue.city}
                  state={venue.state}
                  zip={venue.zip}
                  description={venue.description}
                  yelp={venue.yelp}
                  key={key}
                />
              );
            })}
            <Button style={{ width: '100%' }} onClick={clickMoreVenue}>
              See all venues
            </Button>
          </Col>
          <div>
            <h2>Musicians</h2>
            <Row>
              <div>
                <Col>
                  {musicians1.slice(0, nCards).map((person, key) => {
                    return (
                      <MusicianProfile
                        name={person.name}
                        email={person.email}
                        instrument_1={person.instrument_1}
                        expertise_1={person.expertise_1}
                        expertise_2={person.expertise_2}
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
                  {musicians2.slice(0, nCards).map((person, key) => {
                    return (
                      <MusicianProfile
                        name={person.name}
                        email={person.email}
                        instrument_1={person.instrument_1}
                        expertise_1={person.expertise_1}
                        expertise_2={person.expertise_2}
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
            <Button style={{ width: '100%' }} onClick={clickMoreMusician}>
              See more musicians
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
