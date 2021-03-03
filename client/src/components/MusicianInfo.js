import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const MusicianInfo = props => {
  const musician_name = props.location.state.musician_name;

  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Musician Name:</strong> {musician_name}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MusicianInfo);