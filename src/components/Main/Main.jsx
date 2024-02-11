import style from './Main.module.css';
import {Layout} from '../Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import {Photo} from '../Main/Photo/Photo';
import { List } from './List/List';


export const Main = () => (
    <main className={style.main}>
      <Layout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/photo/:id" element={<Photo />} />
        </Routes>
      </Layout>
    </main>
  );