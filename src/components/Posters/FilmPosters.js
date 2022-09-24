import { getFilmPostersById } from 'components/TheMoviesApi/MoviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageItem, ImagesList } from './FilmPosters.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const Posters = () => {
  const [images, setImages] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmPostersById(movieId)
      .then(({ backdrops }) => setImages(backdrops))
      .catch(error => console.log(error));
  }, [movieId]);

  if (images.length === 0) {
    return <p>No posters for this movie</p>;
  }

  return (
    <ImagesList>
      {images.map(({ file_path }) => (
        <ImageItem key={file_path}>
          <img
            src={`${BASE_IMG_URL}${file_path}`}
            alt="Film posters"
            width="320px"
          ></img>
        </ImageItem>
      ))}
    </ImagesList>
  );
};