import axios from 'axios';

const userUrl = 'http://localhost:5000/api/users';

export const fetchUsers = () => axios.get(userUrl);
export const createUser = (newUser) => axios.post(userUrl, newUser);
