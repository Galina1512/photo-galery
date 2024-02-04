import {useState} from 'react';
import PropTypes from 'prop-types';
import _ from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {delToken} from '../../../store/token/tokenAction';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import Preloader from '../../../UI/PreLoader';


export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(delToken());
    clearAuth();
  };

  return (
    <div className={_.container}>
      {loading ? (
        <Preloader />
      ) : auth.name ? (
        <>
          <button className={_.btn} onClick={getOut}>
            <img
              className={_.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {showLogout && (
            <button className={_.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={_.authLink} As='a' href={urlAuth}>
          <AuthIcon className={_.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
