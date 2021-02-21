import * as api from '../api/index.js';

// Action: get venues
export const getVenues = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVenues();
    const action = { type: 'FETCH_ALL', payload: data };

    dispatch(action);
  } catch (error) {
    console.log('Error getting venues...');
    console.log(error.message);
  }
};

// Action: create a venue
export const createVenue = (venue) => async (dispatch) => {
  try {
    const { data } = await api.createVenue(venue);
    const action = { type: 'CREATE', payload: data };

    dispatch(action);
  } catch (error) {
    console.log('Error creating venue...');
    console.log(error.message);
  }
};
