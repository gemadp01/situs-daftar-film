import config from "../config.js";

export const fetchApi = async (method, path) => {
  try {
    const response = await fetch(`${config.BASE_URL}${path}`, {
      method: method,
      headers: {
        "X-RapidAPI-Key": config.API_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
