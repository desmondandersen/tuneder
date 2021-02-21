import * as api from '../api';

// Action Creators
export const getVenues = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVenues();

    const action = { type: 'FETCH_ALL', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
