import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/LayoutContaineer';

import { Trendings } from 'pages/TrendingsPage/TrendingsList';
import { Movies } from 'pages/Movies/MoviesList';
import { MovieDetails } from '../pages/MovieDetails/Details';
import { Cast } from './Cast/FilmsCast';
import { Reviews } from './Reviews/MovieRewiev';

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
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
