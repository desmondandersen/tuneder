import axios from 'axios';

const url = 'http://localhost:5000/api/users';

export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, updatedUser) =>
  axios.patch(`${url}/${id}`, updatedUser);
