import axios from 'axios';
import { useEffect, useState } from 'react';
import { ACCESS_KEY, URL_ALL_PHOTOS } from '../../../api/const';
import Photos from '../FirstPage/Photos/Photos';

export const FirstPage = () => {
    const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
     .get( `${URL_ALL_PHOTOS}?client_id=${ACCESS_KEY}&per_page=3`)
     .then((response) => {
      setData(response.data);
      console.log(response.data);
   })
    .catch((error) => {
    console.log(error);
   });
  }, []);
  
    return (
      <Photos photos={data}/>
  );
}  
