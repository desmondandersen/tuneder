const reducer = (venues = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return venues;
    default:
      return venues;
  }
};
