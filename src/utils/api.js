import axios from 'axios';

export function api(params) {
  return axios({
    ...params,
    url: process.env.VUE_APP_API_URL + params.url,
  });
}
