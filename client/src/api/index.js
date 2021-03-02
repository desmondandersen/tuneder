import axios from 'axios';

const venueUrl = 'http://localhost:5000/venues';

export const fetchVenues = () => axios.get(venueUrl);
export const createVenue = (newVenue) => axios.post(venueUrl, newVenue);
