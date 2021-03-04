import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Button from 'react-bootstrap/Button';

const MusicianInfo = props => {
  const musician_name = props.location.state.musician_name;
  const email = props.location.state.email;
  const instrument_one = props.location.state.instrument_one;
  const instrument_two = props.location.state.instrument_two;
  const genre = props.location.state.genre;

  return (
    <div className = 'form-details1'>
      <div className="form-details2">
        <h3><strong>Musician Name:</strong> {musician_name}</h3>
        <h3><strong>Email:</strong> {email}</h3>
        <h3><strong>Specialty:</strong> {instrument_one}, {instrument_two}</h3>
        <h3><strong>Genre: </strong> {genre}</h3>
      </div>
      <NavLink to="/" activeClassName="active">
        <Button>See more venues</Button>
      </NavLink>
    </div>
  );
};

export default withRouter(MusicianInfo);