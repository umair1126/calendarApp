import { combineReducers } from "redux";
import { countriesReducer, holidaysReducer } from "./calendarReducer";

export default combineReducers({
  holidays: holidaysReducer,
  countries: countriesReducer,
});
