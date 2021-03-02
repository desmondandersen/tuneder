import axios from 'axios';

const venueUrl = 'http://localhost:5000/venues';
const musicianUrl = 'http://localhost:5000/musicians';

export const fetchVenues = () => axios.get(venueUrl);
export const createVenue = (newVenue) => axios.post(venueUrl, newVenue);
export const fetchMusicians = () => axios.get(musicianUrl);
export const createMusician = (newMusician) => axios.post(musicianUrl, newMusician);