// Import React
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

// Import bootstrap components
import Button from 'react-bootstrap/Button';

// Import components
import NavBar from './NavBar';

// Venue Info Page
const VenueInfo = (props) => {
  const venue_name = props.location.state.venue_name;
  const email = props.location.state.email;
  const address = props.location.state.address;
  const city = props.location.state.city;
  const state = props.location.state.state;
  const zip = props.location.state.zip;
  const description = props.location.state.description;
  const yelp = props.location.state.yelp;

  let button_display = '';

  if (yelp.includes('yelp')) {
    button_display = 'on Yelp';
  } else if (yelp.includes('facebook')) {
    button_display = 'on Facebook';
  } else if (yelp.includes('instagram')) {
    button_display = 'on Instagram';
  } else {
    button_display = 'Elsewhere';
  }

  return (
    <>
      <NavBar />
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
            <strong>Contact: </strong>
            <a href={`mailto:${email}`}>{email} </a>
            <br />
          </p>
          <Button href={`mailto:${email}`} variant='primary'>
            Message
          </Button>{' '}
          <Button href={yelp} target='_blank' variant='outline-secondary'>
            Find us {button_display}
          </Button>{' '}
          <NavLink to='/'>
            <Button variant='outline-secondary'>
              See All Venues and Musicians
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default withRouter(VenueInfo);
