import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmsDetailsById(movieId).then(setFilm);
  }, [movieId]);

  if (!film) {
    return;
  }

  const { backdrop_path, title, popularity, overview, genres } = film;
  const genreList = [];

  genres.forEach(element => {
    genreList.push(element.name);
  });

  return (
    <main>
      <img src={backdrop_path} alt={title} width="320px" />
      <h2>{title}</h2>
      <p>{popularity}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genreList.join(', ')}</p>
    </main>
  );
};
