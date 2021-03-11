// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Import bootstrap components
import Button from 'react-bootstrap/Button';

//import icons
import {FaMusic } from 'react-icons/fa'
import { GiTheaterCurtains } from "react-icons/gi";
import { BsMusicNote } from "react-icons/bs";

// Import components
import NavBar from './NavBar';

// Create Account Page
const CreateAccount = () => {
  return (
    <>
      <NavBar />
      <div className='user-input'>
        <p>I am a...</p>
        <Link to='/new-musician'>
          <Button class="btn btn-primary btn-lg">Musician<BsMusicNote/></Button>
        </Link>
        <br />
        <br />
        <Link to='/new-venue'>
          <Button class="btn btn-primary btn-lg">Venue&nbsp;<GiTheaterCurtains/></Button>
        </Link>
      </div>
    </>
  );
};

export default CreateAccount;
