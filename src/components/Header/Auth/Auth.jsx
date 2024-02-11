import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import _ from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import { urlAuth } from '../../../api/auth';
import { deleteToken } from '../../../store/token/tokenReducer';
import Preloader from '../../../UI/PreLoader';

export const Auth = () => {
const dispatch= useDispatch();
const [auth, loading, clearAuth] = useAuth();
const [showBtn, setShowBtn] = useState(false);

const login = () => {
  window.location.href = urlAuth;
};

const getOut = () => {
  setShowBtn(!showBtn);
};

const logout = () => {
  dispatch(deleteToken());
  clearAuth();
};

  return (
    <>
    {loading ? (
      <Preloader />
    ) : auth?.data?.name ? (
      <div>
        <button onClick={getOut}> 
        {auth?.data?.name} 
        </button>
        {showBtn && (
          <button onClick={logout} className={_.logout}>
          Выход
        </button>
        )}
      </div>
    ) : (
      <div className={_.container}>
          <AuthIcon className={_.svg} />
        <button className={_.logout} onClick={login} >
            Войти
        </button>
      </div>
    )
    }

    </>
  );
};
