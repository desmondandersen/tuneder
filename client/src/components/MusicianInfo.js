import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const MusicianInfo = props => {
  const musician_name = props.location.state.musician_name;
  const email = props.location.state.email;
  const instrument_one = props.location.state.instrument_one;
  const instrument_two = props.location.state.instrument_two;
  const genre = props.location.state.genre;

  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Musician Name:</strong> {musician_name}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Instrument 1:</strong> {instrument_one}
        </div>
        <div>
          <strong>Instrument 2:</strong> {instrument_two}
        </div>
        <div>
          <strong>Genre:</strong> {genre}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MusicianInfo);