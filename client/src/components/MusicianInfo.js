// Import React
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player/lazy';

// Import bootstrap components
import Button from 'react-bootstrap/Button';

//Import icons
import { SiMinutemailer } from "react-icons/si";

// Import components
import NavBar from './NavBar';

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
    <>
      <NavBar />
      <div className='form-details1'>
        <div className='form-details2'>
        <br /> 
          <h1>{musician_name}</h1>
          <p>
            <strong>Genre: </strong> {genre}
            <br />
            <strong>Instruments: </strong> {renderInstruments()}
            <br />
            <strong>Bio: </strong>
            {bio}
            <br />
            <strong>Contact: </strong>
            <a href={`mailto:${email}`}>{email} </a>
          </p>
          <Button href={`mailto:${email}`} variant='primary'>
            Message  &nbsp;<SiMinutemailer/>
          </Button>{' '}
          <NavLink to='/'>
            <Button variant='outline-secondary'>
              See All Venues and Musicians
            </Button>
          </NavLink>
          <br/>
          <hr />
        </div>
        <ReactPlayer url={portfolio} controls={true} />
      </div>
    </>
  );
};

export default withRouter(MusicianInfo);
