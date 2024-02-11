import axios from 'axios';
import { URL_ALL_PHOTOS } from './const';

export const likeUpdate = (id, token, method) => {
  const url = new URL(`${URL_ALL_PHOTOS}/${id}/like`);
  if (!token) return;

  axios(url.href, {
    method,
    headers: { Authorization: `Bearer ${token}` },
  })
  .catch(error => ({ error: error.toString() }));
};