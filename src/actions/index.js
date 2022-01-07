import calendarApi from "../api/calendarApi";

const api_key = "57e39d9a265e982bba944caaf4eba29f110da237";

export const fetchHolidays = (country, year) => {
  return async (dispatch) => {
    const { data } = await calendarApi.get(
      `holidays?&api_key=${api_key}&country=${country}&year=${year}`
    );
    dispatch({
      type: "FETCH_HOLIDAYS",
      payload: data.response,
    });
  };
};

export const fetchCountries = () => {
  return async (dispatch) => {
    const { data } = await calendarApi.get(`countries?&api_key=${api_key}`);
    const { response } = data;
    //console.log(response);
    dispatch({
      type: "FETCH_COUNTRIES",
      payload: response,
    });
  };
};
