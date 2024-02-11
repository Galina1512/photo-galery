import _ from './AllPhotos.module.css';
import { Link, useParams } from 'react-router-dom';

export const AllPhotosFirstPage = ({data}) => {
  const {id} = useParams();


  return (
    <>
  <li className={_.container} key={id}>
  <div className={_.box}>
    <p className={_.author}>Автор: {data.user.name} </p>
  </div>
    <div>
      <Link to={`/photo/${data.id}`}>
        <img src={`${data.urls.small}`} 
            className={_.small_img} 
            alt='foto'
            />
        </Link>
    </div>

    <div className={_.formatDate}>
      <p className={_.date}>{(data.created_at).slice(0, 10)}</p>
      <p className={_.likes}>
        {data.likes} 
        <span>❤️</span> 
      </p>
    </div>
  </li> 
  </>   
)
}
export default AllPhotosFirstPage;

