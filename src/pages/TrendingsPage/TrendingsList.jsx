import { useState, useEffect } from 'react';
import { Title } from './TrendingsList.styled';
import { getTrandings } from 'components/TheMoviesApi/MoviesAPI';
import { MoviesList } from 'components/MoviesList/List';

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
      <MoviesList movies={trendings} />
    </main>
  );
};
