import { getMovieRewievsById } from 'components/TheMoviesApi/MoviesAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledRewiev, StyledRewievTitle } from './MovieRewiev.styled';

export const Reviews = () => {
  const [rewievs, setRewievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieRewievsById(movieId).then(setRewievs);
  }, [movieId]);

  if (rewievs.length === 0) {
    return <p>We don't have any rewiews for this movie</p>;
  }

  return (
    <ul>
      {rewievs.map(({ id, author, content }) => (
        <li key={id}>
          <StyledRewievTitle>{author} </StyledRewievTitle>
          <StyledRewiev>{content}</StyledRewiev>
        </li>
      ))}
    </ul>
  );
};
