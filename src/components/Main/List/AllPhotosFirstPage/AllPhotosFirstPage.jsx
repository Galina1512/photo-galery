import _ from './AllPhotos.module.css';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export const AllPhotosFirstPage = ({data}) => {
  const {id} = useParams();
  const date = data.created_at;
  const formattedDate = dayjs(date).format('DD.MM.YYYY');

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
      <p className={_.date}>{formattedDate}</p>
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

