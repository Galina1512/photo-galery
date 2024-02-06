// import { Link } from 'react-router-dom';
import _ from "./Photo.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDataPhoto } from '../../../../../hooks/useDataPhoto';

export const Photo = () => {
  const {id} = useParams();
  // const dispatch = useDispatch();
  const  [description, bio, date, likes, portret, user, profile_image] = useDataPhoto(id);
  // const token = useSelector(state => state.token.token);

      return (
    <>
      <div>
        {/* <img src={`${profile_image.small}`} className={_.small_img} alt='foto'/> */}
        <p>Автор: {user} </p>
        <p>{bio} </p>
      </div>
      <div>
        <img src={`${portret}`} alt='foto'/>
      </div>
      <button onClick={()=> {

      }}>
        <ArrowBackIcon/>
        <ArrowBackIosIcon/>
      </button>

    </>
    )
  }


