import axios from "axios";
import join from "url-join";
import { apiUrl } from "./../constants";

const isAbsoluteUrlRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteUrlRegex.test(config.url)) {
    config.url = join(apiUrl, config.url);
  }
  config.timeout = 10000; // 10 วิ
  return config;
});

export const httpClient = axios;
