import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const saveLead = (data) => {
  console.log(process.env.REACT_APP_API_URL);
  return instance({
    method: 'POST',
    url: '/user/online-demo/',
    data,
  });
};
