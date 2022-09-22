import { Route, Routes } from 'react-router-dom';
// import { AppBar } from './AppBar/NavBar';
import { Layout } from './Layout/LayoutContaineer';

import { Trendings } from '../pages/Home/HomeList';
import { Movies } from 'pages/Movies/MoviesList';
import { MovieDetails } from './MovieDetails/Details';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Trendings />} />

          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="/" element={<AppBar />} />

          <Route path="films" element={<div>Films</div>} /> */}
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
