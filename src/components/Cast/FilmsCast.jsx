import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Photo, StyledItem, StyledList, Description } from './FilmsCast.styled';
import { getMovieCreditsById } from 'components/TheMoviesApi/MoviesAPI';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCreditsById(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => console.log(error));
  }, [movieId]);

  if (cast.length === 0) {
    return <p>Sorry, we don't have any cast information at the moment</p>;
  }

  return (
    <StyledList>
      {cast.map(({ credit_id, profile_path, name, character }) => (
        <StyledItem key={credit_id}>
          <Photo
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            width="80px"
          />
          <Description>
            <b>Actor:</b> {name}
          </Description>
          <Description>
            <b>Character:</b> {character}
          </Description>
        </StyledItem>
      ))}
    </StyledList>
  );
};