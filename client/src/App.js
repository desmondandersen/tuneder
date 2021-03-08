// Import React and Redux
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/users.js';

// Add styling
import './styles.css';

// Import components
import Routes from './Routes.js';
import NavBar from './components/NavBar';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers()), [dispatch]);

  return (
    <div className='app'>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;