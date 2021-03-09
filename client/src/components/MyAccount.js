// Import React
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player/lazy';

// Import bootstrap components
import { Button } from 'react-bootstrap';

const MyAccount = () => {
  let type = sessionStorage.getItem('type');

  if (type === 'Venue') {
    const venue_name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const address = sessionStorage.getItem('address');
    const city = sessionStorage.getItem('city');
    const state = sessionStorage.getItem('state');
    const zip = sessionStorage.getItem('zip');
    const description = sessionStorage.getItem('description');

    return (
      <div className='form-details1'>
        <div className='form-details2'>
          <h2>{venue_name}</h2>
          <p>
            <strong>Description: </strong>
            {description}
            <br />
            <strong>Address: </strong>
            {address}, {city}, {state} {zip}
            <br />
            <strong>Your email: </strong>
            <a href={`mailto:${email}`}>{email} </a>
            <br />
          </p>
          <Button> Edit Info</Button>
        </div>
      </div>
    );
  } else {
    const musician_name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const instrument_1 = sessionStorage.getItem('instrument_1');
    const instrument_2 = sessionStorage.getItem('instrument_2');
    const expertise_1 = sessionStorage.getItem('expertise_1');
    const expertise_2 = sessionStorage.getItem('expertise_2');
    const genre = sessionStorage.getItem('genre');
    const bio = sessionStorage.getItem('bio');
    const portfolio = sessionStorage.getItem('portfolio');

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
            <strong>Bio: </strong> {bio}
            <br />
            <strong>Genre: </strong> {genre}
            <br />
            <strong>Instruments: </strong> {renderInstruments()}
            <br />
            <strong>Contact: </strong>
            <a href={`mailto:${email}`}>{email} </a>
          </p>
          <Button variant='primary'>Edit Profile</Button>
          <hr />
        </div>
        <ReactPlayer url={portfolio} controls={true} />
      </div>
    );
  }
};

export default withRouter(MyAccount);
