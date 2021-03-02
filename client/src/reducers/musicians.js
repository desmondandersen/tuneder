const reducer = (musicians = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
        return [...musicians, action.payload];
      default:
        return musicians;
    }
  };
  
  export default reducer;