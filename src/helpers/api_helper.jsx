import axios from 'axios';
import accessToken from './jwt-token-access/accessToken';

//pass new generated access token here
const token = accessToken;

//apply base url for axios
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const axiosApi = axios.create({
 baseURL: BASE_URL,
});

axiosApi.defaults.headers.common['Authorization'] = token;

axiosApi.interceptors.response.use(
 response => response,
 error => Promise.reject(error),
);

export async function get(url, config = {}) {
 return await axiosApi.get(url, { ...config }).then(response => response.data);
}

export async function post(url, data, config = {}) {
 return axiosApi
  .post(url, { ...data }, { ...config })
  .then(response => response.data);
}

export async function patch(url, data, config = {}) {
  console.log(url, data)
 return axiosApi
  .patch(url, { ...data }, { ...config })
  .then(response => response.data);
}

export async function put(url, data, config = {}) {
 return axiosApi
  .put(url, { ...data }, { ...config })
  .then(response => response.data);
}

export async function del(url, config = {}) {
 return await axiosApi
  .delete(url, { ...config })
  .then(response => response.data);
}
