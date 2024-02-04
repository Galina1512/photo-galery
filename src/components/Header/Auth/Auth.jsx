import { useEffect, useState } from 'react';
import _ from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import { urlAuth } from '../../../api/auth';
// import { urlListPhoto } from '../../../api/const';

export const Auth = ({token}) => {
  // const [listPhoto, setListPhoto] = useState({});

  useEffect (() => {
    if (!token) return;

    fetch (`${urlAuth}`, {
      headers: {
        Autorization: `bearer ${token}`,
      },
    })
    .then (response => response.json())
    .then(({ data: { name, profile_image: iconImg, username } }) => {
      const img = iconImg.small.replace(/\?.*$/, '');
      const data = { name, img, username };
      return data;
    })});

  return (
    <div className={_.container}>
      <a href={`urlAuth`} className={_.btn}>
        <AuthIcon className={_.svg} />
      </a>
      <button className={_.logout} >
        Войти
      </button>
    </div>
  );
};
