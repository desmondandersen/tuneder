import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const VenueInfo = props => {
  const venue_name = props.location.state.venue_name;
  const email = props.location.state.email;
  const city = props.location.state.city;
  const phone = props.location.state.phone;

  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {venue_name}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
    </div>
  );
};

export default withRouter(VenueInfo);