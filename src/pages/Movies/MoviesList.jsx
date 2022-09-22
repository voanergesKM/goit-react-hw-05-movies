import { getFilmsByKeywords } from 'components/TheMoviesApi/MoviesAPI';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StyledBtn, StyledInput } from './MoviesList.styled';

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
      <form onSubmit={onSearchFilm}>
        <StyledInput name="search" autoComplete="off" />
        <StyledBtn type="submit">Search</StyledBtn>
      </form>
      {filmList.length > 0 && (
        <ul>
          {filmList.map(film => (
            <li key={film.id}>
              <Link to={`${film.id}`}>{film.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};
