// Import React and Redux
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/users.js';

// Add styling
import './styles.css';

// Import components
import Routes from './Routes.js';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers()), [dispatch]);

  return (
    <div className='app'>
      <Routes />
    </div>
  );
};

export default App;
