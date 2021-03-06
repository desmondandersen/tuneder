// Import React and Redux
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/users.js';

// Add styling
import './styles.css';

// Import components
import Routes from './Routes.js';
import NavBar from './components/NavBar';
import Login from './components/LoginForm.js'




function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}
function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers()), [dispatch]);
  const token = getToken();
  // if (!token){
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className='app'>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
