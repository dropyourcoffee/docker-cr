import axios , {AxiosRequestConfig}  from "axios";


export interface ApiResponse<T> {
  success: boolean,
  data?: T,
  error?: Error
}

const client = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 15*1000
});

export const request = async (options: AxiosRequestConfig) => {

  const res = await client.request(options);
  return res.data;

};

export default client;