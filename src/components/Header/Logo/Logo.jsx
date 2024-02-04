import style from './Logo.module.css';
import logo from './img/logo.png';

export const Logo = () => (
  <a className={style.link} href='/'>
    <img className={style.logo} src={logo} alt='logo'/>
  </a>
);

