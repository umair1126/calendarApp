export const holidaysReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_HOLIDAYS":
      // debugger;
      return action.payload;

    default:
      return state;
  }
};

export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return [...state, action.payload];

    default:
      return state;
  }
};
