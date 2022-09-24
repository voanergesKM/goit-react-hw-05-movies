import { MoviesList } from 'components/MoviesList/List';
import { getFilmsByKeywords } from 'components/TheMoviesApi/MoviesAPI';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledBtn, StyledInput, SearchBar } from './MoviesList.styled';

export const Movies = () => {
  const [searchQry, setSearchQry] = useState('');
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    if (searchQry === '') {
      return;
    }
    getFilmsByKeywords(searchQry).then(setFilmList);
  }, [searchQry]);

  const onSearchFilm = evt => {
    evt.preventDefault();

    const seacrhQry = evt.target.elements.search.value;
    setSearchQry(seacrhQry.trim());
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
