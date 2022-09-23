import { useState, useEffect } from 'react';
import {
  StyledItem,
  StyledList,
  StyledLink,
  Title,
} from './TrendingsList.styled';
import { getTrandings } from 'components/TheMoviesApi/MoviesAPI';

export const Trendings = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrandings()
      .then(({ results }) => setTrendings(results))
      .catch(error => console.log(error));
  }, []);

  if (trendings.length === 0) {
    return null;
  }

  return (
    <main>
      <Title>Trendings today</Title>
      <StyledList>
        {trendings.map(movie => (
          <StyledItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </main>
  );
};
