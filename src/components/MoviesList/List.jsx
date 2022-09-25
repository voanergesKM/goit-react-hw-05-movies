import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};
