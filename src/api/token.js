import { ACCESS_KEY, SECRET_KEY, REDIRECT_URI, API_URL_TOKEN } from './const';
import axios from 'axios';

export const setToken = (token) => {
    localStorage.setItem('bearer', token);
  };
  
  export const getToken = () => {
    let token = '';
    if (window.location.search.includes('code')) {
      const code = new URLSearchParams(window.location.search).get('code');
      const url = new URL(API_URL_TOKEN);
      url.searchParams.append('client_id', ACCESS_KEY);
      url.searchParams.append('client_secret', SECRET_KEY);
      url.searchParams.append('redirect_uri', REDIRECT_URI);
      url.searchParams.append('code', code);
      url.searchParams.append('grant_type', 'authorization_code');

      axios
      .post(url)
      .then(({data}) => {
          token = data.access_token;
          setToken(data.access_token);
          window.location.replace('/');
      })
      .catch(err => {
          console.error ('Ошибка авторизации:', err.message);
      });
  }
    if (localStorage.getItem('bearer')) {
        token = localStorage.getItem('bearer');
  };
      return token;

};
