// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from './AllPhotos.module.css';
import { photosRequestAsync } from '../../../../store/photos/photosAction';
import { Link, useParams } from 'react-router-dom';

export const AllPhotos = ({photos}) => {
  const dispatch = useDispatch();
  dispatch(photosRequestAsync());
  const {id} = useParams();
  // const {photos} = useSelector(state => state.photos);


  return (
    <>
  <li className={_.container} key={id}>
  <div>
    <p className={_.author}>Автор: {photos.user.name} </p>
  </div>
    <div>
      <Link to={`/photo/${id}`}>
        <img src={`${photos.urls.small}`} 
            className={_.small_img} 
            alt='foto'
            />
        </Link>
    </div>

    <div className={_.formatDate}>
      <p>{(photos.created_at).slice(0, 10)}</p>
      <p className={_.likes}>
        {photos.likes} 
        <span className={_.hard}>❤️</span> 
      </p>
    </div>
  </li> 
  </>   
)
}
export default AllPhotos;

/* <Link to={`${photos.urls.regular}`} target='_blank' rel='noreferrer' > */
