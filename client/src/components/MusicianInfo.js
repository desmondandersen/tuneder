import React from 'react';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

// Import bootstrap components
import { Button } from 'react-bootstrap';

// Musician Info Page
const MusicianInfo = (props) => {
  const musician_name = props.location.state.musician_name;
  const email = props.location.state.email;
  const instrument_1 = props.location.state.instrument_1;
  const instrument_2 = props.location.state.instrument_2;
  const genre = props.location.state.genre;
  const portfolio = props.location.state.portfolio;
  const bio = props.location.state.bio;

  const renderInstruments = () => {
    if (instrument_2)
      return (
        <ul>
          <li>{instrument_1}</li>
          <li>{instrument_2}</li>
        </ul>
      );
    else return instrument_1;
  };

  return (
    <div className='form-details1'>
      <div className='form-details2'>
        <h2>{musician_name}</h2>
        <p>
          <strong>Bio: </strong>
          {bio}
          <br />
          <strong>Genre: </strong>
          {genre}
          <br />
          <strong>Instruments: </strong>
          {renderInstruments()}
          <br />
          <strong>Portfolio: </strong>
          {portfolio}
          <br />
          <strong>Contact: </strong>
          <a href={`mailto:${email}`}>{email} </a>
        </p>
        <Button href={`mailto:${email}`} variant='primary'>
          Message
        </Button>{' '}
        <NavLink to='/' activeClassName='active'>
          <Button variant='outline-secondary'>See more musicians</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(MusicianInfo);
