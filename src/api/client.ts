import axios , {AxiosRequestConfig}  from "axios";
import env from "../env";


const {API_URL="[::1]"} = env;

export interface ApiResponse<T> {
  success: boolean,
  data?: T,
  error?: Error
}

const client = axios.create({
  baseURL: `http://${API_URL.replace(/(^\w+:|^)\/\//, "")}`,
  timeout: 15*1000
});

export const request = async (options: AxiosRequestConfig) => {

  const res = await client.request(options);
  return res.data;

};

export default client;