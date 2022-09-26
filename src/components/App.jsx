import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/LayoutContaineer';
import { Home } from 'pages/Home/HomePage';
import { Movies } from 'pages/Movies/MoviesPage';
import { MovieDetails } from 'pages/MovieDetails/Details';
import { Cast } from './Cast/FilmsCast';
import { Reviews } from './Reviews/MovieRewiev';
import { Posters } from './Posters/FilmPosters';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="posters" element={<Posters />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
