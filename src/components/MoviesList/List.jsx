import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink, StyledList } from './List.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(({ id, title, release_date }) => (
        <StyledItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
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
