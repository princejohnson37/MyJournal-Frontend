const BASE_URL = "http://localhost:3001/api/";
const headers = {
  "Content-Type": "application/json", // Specify JSON content type
};

const DIARY_ENDPOINT = {
  listDiary: {
    endpoint: BASE_URL + "diary",
    method: "GET",
    headers,
  },
  postOneDiary: {
    endpoint: BASE_URL + "diary",
    method: "POST",
    headers,
  },
};

const LOGIN = {
  endpoint: BASE_URL + "login",
  method: "POST",
  headers,
};
const REGISTER = {
  endpoint: BASE_URL + "register",
  method: "POST",
  headers,
};

export {DIARY_ENDPOINT,LOGIN,REGISTER}
