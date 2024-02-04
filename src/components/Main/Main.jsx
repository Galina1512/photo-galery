import style from './Main.module.css';
import {Layout} from '../Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import {FirstPage} from './FirstPage/FirstPage';
// import {Photo} from '../Main/FirstPage/AllPhotos/Photo/Photo';


export const Main = () => (
    <main className={style.main}>
      <Layout>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          {/* <Route path="/photo/:id" element={<Photo />} /> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Layout>
    </main>
  );