import axios from "axios";

export default axios.create({
  baseURL: `https://calendarific.com/api/v2/`,
});
