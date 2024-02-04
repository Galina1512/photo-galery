// import { Link } from 'react-router-dom';
import _ from './AllPhotos.module.css';
import formatDate from '../../../../utils/formatDate';

export const AllPhotos = ({photos, id}) => {

  return (
    <>
  <li className={_.container}>
  <div>
    <p className={_.author}>Автор: {photos.user.name} </p>
  </div>
    <div>
        <img src={`${photos.urls.small}`} 
            className={_.small_img} 
            alt='foto'
            />
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
