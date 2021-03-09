// Import React
import React from 'react';
import { withRouter } from 'react-router';

// Import components
import MusicianForm from './MusicianForm';
import VenueForm from './VenueForm';

const MyAccount = () => {
  let type = sessionStorage.getItem('type');

  if (type === 'Venue') {
    const id = sessionStorage.getItem('id');
    return <VenueForm currentId={id} />;
  } else {
    const id = sessionStorage.getItem('id');
    return <MusicianForm currentId={id} />;
  }
};

export default withRouter(MyAccount);
