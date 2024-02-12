import BeatLoader from 'react-spinners/BeatLoader';
import _ from  './Preloader.module.css';

export const PreLoader = () => (
  <BeatLoader className={_.preloader} color="#A2E1D6" size={18} />
);
