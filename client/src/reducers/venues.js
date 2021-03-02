const reducerV = (venues = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...venues, action.payload];
    default:
      return venues;
  }
};

export default reducerV;
