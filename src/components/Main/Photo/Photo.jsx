// import { Link } from 'react-router-dom';
import _ from "./Photo.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {photoRequestAsync} from '../../../store/photo/photoAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { changeLike } from '../../../store/photo/photoSlice';
import { likeUpdate } from '../../../api/likeUpdate';
import PreLoader from '../../../UI/PreLoader';
// import { format } from 'date-fns';

export const Photo = () => {
  const {id} = useParams();
  const photo = useSelector(state => state.photo.photo);
  const dispatch = useDispatch();
  const likes = useSelector(state => state.photo.likes);
  console.log(photo);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.photo.loading);
  const { likedByUser} = useSelector(state => state.photo);
  const username= photo?.user?.username;
  // const apiDate = photo?.created_at;
// const date = format(new Date(apiDate), 'dd.MM.yyyy');

  
  useEffect(() => {
  dispatch(photoRequestAsync(id));
}, [dispatch, id]);

const handleLike = () => {
  const method = likedByUser ? 'DELETE' : 'POST';
  likeUpdate(id, token, method);
  dispatch(changeLike());
}
if (loading) return <PreLoader/>

  return (
  <div className={_.container}>
    <div className={_.info_author}>
      <div className={_.author}>
      <a target='_blank' href={`https://unsplash.com/@${username}`} rel='noreferrer' className={_.author}>
      <img src={`${photo?.user?.profile_image.small}`} className={_.avatar} alt='avatar'/>
      <p className={_.text}>Автор: {photo?.user?.name} </p>
    </a>



        <p className={_.text}>{photo?.user?.location} </p>
      </div>

      <div className={_.date}>
        <p className={_.text}>{photo?.created_at} </p>
          {/* <p className={_.text_date}>{date}</p> */}
          {/* <p className={_.text_date}>{(photo?.created_at).slice(0, 10)}</p> */}
          <button 
            className={_.heart} 
            onClick={handleLike}
            id={id}
            >
            {likes}  
            { likedByUser ? <FavoriteIcon width='140px'  /> : <FavoriteBorderIcon  /> }
          </button> 
      </div>
    </div>

    <img src={`${photo?.urls?.regular}`} className={_.image} alt='foto'/>
    <p className={_.text}>{photo?.description} </p>

  </div>
  )
}


