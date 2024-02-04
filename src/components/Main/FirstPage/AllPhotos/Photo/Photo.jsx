// import { Link } from 'react-router-dom';
import _ from "./Photo.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams } from 'react-router-dom';

export const Photo = ({photos}) => {
  const id = useParams();
      return (
    <>
      <div>
        <img src={`${photos.user.profile_image.small}`} className={_.small_img} alt='foto'/>
        <p>Автор: {photos.user.name} </p>
        <p>{photos.user.bio} </p>
      </div>
      <div>
        <img src={`${photos.urls.regular}`} alt='foto'/>
      </div>
      <button onClick={()=> {

      }}>
        <ArrowBackIcon/>
        <ArrowBackIosIcon/>
      </button>

    </>
    )
  }


