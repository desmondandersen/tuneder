// Import React
import React from 'react';

// Import components
import NavBar from './NavBar';

// 404 Page Not Found
const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <h1>404</h1>
      <p>Sorry the page you are looking for does not exist.</p>
    </>
  );
};

export default PageNotFound;
