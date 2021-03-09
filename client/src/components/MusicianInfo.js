import React from 'react';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player/lazy';

// Import bootstrap components
import { Button } from 'react-bootstrap';

// Musician Info Page
const MusicianInfo = (props) => {
  const musician_name = props.location.state.musician_name;
  const email = props.location.state.email;
  const instrument_1 = props.location.state.instrument_1;
  const expertise_1 = props.location.state.expertise_1;
  const instrument_2 = props.location.state.instrument_2;
  const expertise_2 = props.location.state.expertise_2;
  const genre = props.location.state.genre;
  const bio = props.location.state.bio;
  const portfolio = props.location.state.portfolio;

  const renderInstruments = () => {
    let instruments = `${instrument_1} (${expertise_1})`;
    if (instrument_2) instruments += `, ${instrument_2} (${expertise_2})`;
    return instruments;
  };

  return (
    <div className='form-details1'>
      <div className='form-details2'>
        <h2>{musician_name}</h2>
        <p>
          <strong>Bio: </strong>
          {bio}
          <br />
          <strong>Genre: </strong> {genre}
          <br />
          <strong>Instruments: </strong> {renderInstruments()}
          <br />
          <strong>Contact: </strong>
          <a href={`mailto:${email}`}>{email} </a>
        </p>
        <Button href={`mailto:${email}`} variant='primary'>
          Message
        </Button>{' '}
        <NavLink to='/' activeClassName='active'>
          <Button variant='outline-secondary'>
            See All Venues and Musicians
          </Button>
        </NavLink>
        <hr />
      </div>
      <ReactPlayer url={portfolio} controls={true} />
    </div>
  );
};

export default withRouter(MusicianInfo);
