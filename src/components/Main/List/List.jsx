import _ from './List.module.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../store/photos/photosAction';
import { firstPhotos } from '../../../store/photos/photosSlice';
// import { ImageList, useMediaQuery } from '@mui/material';
import Preloader from '../../../UI/PreLoader';
import AllPhotosFirstPage from './AllPhotosFirstPage/AllPhotosFirstPage';
// import { UpBtn } from '../../../UI/UpBtn/UpBtn';
// import { generateRandomId } from '../../../utils/generateRandomId';
// import { PhotoCard } from './PhotoCard/PhotoCard';

export const List = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);
  const error = useSelector((state) => state.photos.error);
  const page = useSelector((state) => state.photos.page);
  const endList = useRef(null);

  useEffect(() => {
    dispatch(firstPhotos());
    dispatch(photosRequestAsync());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(photosRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
         observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <div className={_.main}>
      {loading && <Preloader />}
      <p className={_.text}>Для получения возможности оценивать фотографии необходимо авторизоваться</p>
      <ul className={_.container}>
        {photos.map((item) => (
            <AllPhotosFirstPage 
            data={item}
            key={item.id}
            likes={item.likes}
          />
        ))}
        <li ref={endList} className={_.end}/>
      </ul>

      {page !== 1 && loading && <Preloader/>}

      {/* <div ref={endList} /> */}
    </div>
  );
};