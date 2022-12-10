import { message } from 'antd';
import axios, { AxiosError, AxiosResponse } from 'axios';

type InputMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Props {
  endpoint: string;
  method?: InputMethodType;
  data?: any;
}

const fetcher = async (dataAxios: Props) => {
  const { endpoint, data, method = 'GET' } = dataAxios;
  let url = endpoint;
  if (method === 'GET' && data) {
    url += `?${new URLSearchParams(data).toString()}`;
  }
  return axios({
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    url: `https://jsonplaceholder.typicode.com/${url}`,
    data
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      const errors = new Error(error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2x
        errors.message = 'Error request';
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        errors.message = `Error request`;
      }
      message.error(errors.message);
      throw errors;
    });
};

export default fetcher;
