import React from 'react';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player/lazy'

// Import bootstrap components
import { Button } from 'react-bootstrap';

// Musician Info Page
const MusicianInfo = (props) => {
  const musician_name = props.location.state.musician_name;
  const email = props.location.state.email;
  const instrument_one = props.location.state.instrument_one;
  let instrument_two = props.location.state.instrument_two;
  const genre = props.location.state.genre;
  const portfolio_link = props.location.state.portfolio_link;

  if (instrument_two == ""){
    instrument_two = "(None)"
  }

  return (
    <div className='form-details1'>
      <div className='form-details2'>
        <h3>
          <strong>Musician Name:</strong> {musician_name}
        </h3>
        <h3>
          <strong>Email:</strong> {email}
        </h3>
        <h3>
          <strong>Specialty:</strong> {instrument_one}, {instrument_two}
        </h3>
        <h3>
          <strong>Genre: </strong> {genre}
        </h3>
      </div>
      <NavLink to='/' activeClassName='active'>
        <Button>See more venues</Button>
      </NavLink>
      <div>
        <ReactPlayer
          url={portfolio_link}
          controls={true}
        />
      </div>
    </div>
  );
};

export default withRouter(MusicianInfo);
