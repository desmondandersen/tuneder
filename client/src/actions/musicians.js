import * as api from '../api/index.js';

// Action: get artists
export const getMusicians = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMusicians();
    const action = { type: 'FETCH_ALL', payload: data };

    dispatch(action);
  } catch (error) {
    console.log('Error getting musicians...');
    console.log(error.message);
  }
};

// Action: create an artist
export const createMusician = (musician) => async (dispatch) => {
  try {
    const { data } = await api.createMusician(musician);
    const action = { type: 'CREATE', payload: data };
    console.log('Creating musician');
    dispatch(action);
  } catch (error) {
    console.log('Error creating musician...');
    console.log(error.message);
  }
};
