import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Button from 'react-bootstrap/Button';

const VenueInfo = props => {
  const venue_name = props.location.state.venue_name;
  const email = props.location.state.email;
  const password = props.location.state.password;
  const location = props.location.state.location;
  const description = props.location.state.description;

  return (
    <div className = 'form-details1'>
      <div className="form-details2">
        <h3><strong>Venue Name:</strong> {venue_name}</h3>
        <h3><strong>Email:</strong> {email}</h3>
        <h3><strong>Location:</strong> {location}</h3>
        <h3><strong>Description:</strong> {description}</h3>
      </div>
      <NavLink to="/" activeClassName="active">
        <Button>See more venues</Button>
      </NavLink>
    </div>
  );
};

export default withRouter(VenueInfo);