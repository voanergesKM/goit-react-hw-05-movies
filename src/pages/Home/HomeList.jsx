import { getTrandings } from 'components/TheMoviesApi/MoviesAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledItem, StyledList } from './HomeList.styled';

export const Trendings = () => {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    getTrandings().then(setTrendings);
  }, []);

  if (!trendings) {
    return null;
  }

  return (
    <StyledList>
      {trendings.map(movie => (
        <StyledItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </StyledItem>
      ))}
    </StyledList>
  );
};
