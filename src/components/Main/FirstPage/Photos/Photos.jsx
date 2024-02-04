import AllPhotos from '../AllPhotos/AllPhotos';
import _ from './Photos.module.css';

export const Photos = (props) => {

    const { photos } = props

    if (!photos || photos.length === 0) return <p>Нет данных.</p>

    return (
    <dir className={_.main}>
      <p className={_.text}>Для получения полномочий необходимо авторизоваться</p>
      <ul className={_.container}>
        {photos.map(photos =>
        <AllPhotos key={photos.id} photos={photos}/>)
        }
      </ul>
    </dir>
    )
}

export default Photos;