import axios from 'axios';

const url = 'http://localhost:5000/venues';

export const fetchVenues = () => axios.get(url);
