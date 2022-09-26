import { useState, useEffect } from 'react';
import { getTrandings } from 'components/TheMoviesApi/MoviesAPI';
import { MoviesList } from 'components/MoviesList/List';
import { MainTitle } from 'components/PageTitle/Titles';

export const Home = () => {
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
      <MainTitle
        text={'Trendings today'}
        style={{ marginBottom: '16px', marginLeft: '16px' }}
      />
      <MoviesList movies={trendings} />
    </main>
  );
};
