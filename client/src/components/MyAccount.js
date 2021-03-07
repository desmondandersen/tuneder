import React from 'react';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player/lazy'

// Import bootstrap components
import { Button } from 'react-bootstrap';

import VenueInfo from './VenueInfo.js';
import MusicianInfo from './MusicianInfo.js';

// Musician Info Page
const MyAccount = () => {
    let type = sessionStorage.getItem('type');

    if(type == 'Venue')
    {
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
                        <strong>Contact: </strong>
                        <a href={`mailto:${email}`}>{email} </a>
                        <br />
                    </p>
                    <Button href={`mailto:${email}`} variant='primary'>
                        Message
                    </Button>{' '}
                    <NavLink to='/' activeClassName='active'>
                        <Button variant='outline-secondary'>See more venues</Button>
                    </NavLink>
                </div>
            </div>
        );
    }
    else
    {
        const musician_name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
        const instrument_1 = sessionStorage.getItem('instrument_1');
        const instrument_2 = sessionStorage.getItem('instrument_2');
        const genre = sessionStorage.getItem('genre');
        const bio = sessionStorage.getItem('bio');
        let portfolio = sessionStorage.getItem('portfolio');
      
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
      
        if(portfolio == ""){
          portfolio = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      
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
              <Button href={`mailto:${email}`} variant='primary'>
                Message
              </Button>{' '}
              <NavLink to='/' activeClassName='active'>
                <Button variant='outline-secondary'>See more musicians</Button>
              </NavLink>
            </div>
            <NavLink to='/' activeClassName='active'>
              <Button>See more venues</Button>
            </NavLink>
            <div>
              <ReactPlayer
                url={portfolio}
                controls={true}
              />
            </div>
          </div>
        );
    }
};

export default withRouter(MyAccount);