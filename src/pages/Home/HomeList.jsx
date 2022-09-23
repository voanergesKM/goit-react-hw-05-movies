import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledItem, StyledList } from './HomeList.styled';
import { getTrandings } from 'components/TheMoviesApi/MoviesAPI';

export const Trendings = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrandings()
      .then(setTrendings)
      .catch(error => console.log(error));
  }, []);

  if (!trendings) {
    return null;
  }

  return (
    <>
      <h1>Trending list</h1>
      <StyledList>
        {trendings.map(movie => (
          <StyledItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};
