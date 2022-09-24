import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledRewiev,
  StyledRewievTitle,
  RewievItem,
} from './MovieRewiev.styled';
import { getMovieRewievsById } from 'components/TheMoviesApi/MoviesAPI';

export const Reviews = () => {
  const [rewievs, setRewievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieRewievsById(movieId)
      .then(({ results }) => setRewievs(results))
      .catch(error => console.log(error));
  }, [movieId]);

  if (rewievs.length === 0) {
    return <p>We don't have any rewievs for this movie</p>;
  }

  return (
    <ul>
      {rewievs.map(({ id, author, content }) => (
        <RewievItem key={id}>
          <StyledRewievTitle>Author name: {author} </StyledRewievTitle>
          <StyledRewiev>{content}</StyledRewiev>
        </RewievItem>
      ))}
    </ul>
  );
};