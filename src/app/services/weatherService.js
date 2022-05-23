import Axios from "axios";

import { config } from "../../config";

const axiosConfig = {
  baseURL: config.API_URL,
  params: {
    appid: config.API_KEY,
  },
};

export const getWeatherInfo = (city) => {
  axiosConfig.params.units = "metric";
  axiosConfig.params.q = city;

  return Axios.get("weather", axiosConfig);
};
