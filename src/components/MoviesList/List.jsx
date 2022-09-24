// import PropTypes from 'prop-types';
import { StyledItem, StyledLink, StyledList } from './List.styled';

export const MoviesList = ({ movies }) => {
  return (
    <StyledList>
      {movies.map(({ id, title, release_date }) => (
        <StyledItem key={id}>
          <StyledLink to={`/movies/${id}`}>
            {title} ({release_date.slice(0, 4)})
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};
