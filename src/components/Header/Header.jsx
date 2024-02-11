import style from './Header.module.css';
import Logo from './Logo';
import Auth from './Auth';
import Heading from './Heading';


export const Header = () => (
  <header className={style.header}>
      <div className={style.container}>
        <Logo/>
        <Heading text="Главная" />
        <Auth/>
      </div>
  </header>
);


