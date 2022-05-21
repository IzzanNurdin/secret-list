import axios from "axios";

export function fetchData(url) {
  return axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
}
