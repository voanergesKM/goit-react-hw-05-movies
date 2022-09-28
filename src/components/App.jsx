import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/LayoutContaineer';
import { Home } from 'pages/Home/HomePage';
import { Movies } from 'pages/Movies/MoviesPage';
import { Posters } from './Posters/FilmPosters';
import { Loader } from './Loader/PageLoader';
import { NotFoundPage } from 'pages/404/404';

const MovieDetails = lazy(() => import('../pages/MovieDetails/Details'));

const Cast = lazy(() => import('../components/Cast/FilmsCast'));

const Reviews = lazy(() => import('../components/Reviews/MovieRewiev'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="posters" element={<Posters />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
