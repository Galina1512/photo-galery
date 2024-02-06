import { useRef, useEffect } from 'react';
import AllPhotos from '../AllPhotos/AllPhotos';
import _ from './Photos.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../../store/photos/photosAction.js';

export const Photos = () => {
  const dispatch = useDispatch();
  const endList = useRef(null);
  dispatch(photosRequestAsync());
  const {photos} = useSelector(state => state.photos);
  // const photos = getState().photos.photos;

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       dispatch(photosRequestAsync());
  //     }
  //   },
  //   {
  //     rootMargin: '100px',
  //   });
  //   observer.observe(endList.current);

  //   return () => {
  //     if (endList.current) {
  //       observer.unobserve(endList.current);
  //     }
  //   };
  // }, [endList.current]);

    return (
    <dir className={_.main}>
      <p className={_.text}>Для получения больших возможностей необходимо авторизоваться</p>
      <ul className={_.container}>
        {photos.map(photos =>
        <AllPhotos key={photos.id} photos={photos}/>)
        }
        <li ref={endList} className={_.end}/>
      </ul>
    </dir>
    )
}

export default Photos;