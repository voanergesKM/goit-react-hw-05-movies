import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/LayoutContaineer';
import { Trendings } from 'pages/TrendingsPage/TrendingsList';
import { Movies } from 'pages/Movies/MoviesList';
import { MovieDetails } from 'pages/MovieDetails/Details';
import { Cast } from './Cast/FilmsCast';
import { Reviews } from './Reviews/MovieRewiev';
import { Posters } from './Posters/FilmPosters';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trendings />} />
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
