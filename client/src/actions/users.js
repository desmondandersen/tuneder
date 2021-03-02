import * as api from '../api/index.js';

// Action: get users
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    const action = { type: 'FETCH_ALL', payload: data };

    dispatch(action);
  } catch (error) {
    console.log('Error getting users...');
    console.log(error.message);
  }
};

// Action: create a user
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    const action = { type: 'CREATE', payload: data };
    console.log('Creating user');
    dispatch(action);
  } catch (error) {
    console.log('Error creating user...');
    console.log(error.message);
  }
};
