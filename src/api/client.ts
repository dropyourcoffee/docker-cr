import axios , {AxiosRequestConfig}  from "axios";
import env from "../env";


const {API_URL: baseURL} = env;

export interface ApiResponse<T> {
  success: boolean,
  data?: T,
  error?: Error
}

const client = axios.create({
  baseURL,
  timeout: 15*1000
});

export const request = async (options: AxiosRequestConfig) => {

  const res = await client.request(options);
  return res.data;

};

export default client;