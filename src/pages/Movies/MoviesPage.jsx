import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/List';
import { StyledBtn, StyledInput, SearchBar } from './MoviesPage.styled';
import { getFilmsByKeywords } from 'components/TheMoviesApi/MoviesAPI';

export const Movies = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQry = searchParams.get('query');

  useEffect(() => {
    if (!searchQry) {
      return;
    }
    getFilmsByKeywords(searchQry).then(setFilmList);
  }, [searchQry]);

  const onSearchFilm = evt => {
    evt.preventDefault();

    const seacrhQry = evt.target.elements.search.value;
    setSearchParams(seacrhQry !== '' ? { query: seacrhQry.trim() } : {});

    evt.target.reset();
  };

  return (
    <>
      <SearchBar onSubmit={onSearchFilm}>
        <StyledInput name="search" autoComplete="off" />
        <StyledBtn type="submit">Search</StyledBtn>
      </SearchBar>
      {filmList.length > 0 && <MoviesList movies={filmList} />}
      <Outlet />
    </>
  );
};