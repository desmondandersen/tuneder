import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const VenueInfo = props => {
  const venue_name = props.location.state.venue_name;
  const email = props.location.state.email;
  const password = props.location.state.password;
  const location = props.location.state.location;
  const description = props.location.state.description;

  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Venue Name:</strong> {venue_name}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Password:</strong> {password}
        </div>
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
      </div>
    </div>
  );
};

export default withRouter(VenueInfo);