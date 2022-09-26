import PropTypes from 'prop-types';
import { NavLinkStyled, LinkStyled } from './NavigateLink.styled';

export const Link = ({ icon: Icon, text, location }) => {
  return (
    <LinkStyled to={location}>
      {Icon}
      {text}
    </LinkStyled>
  );
};

export const NavLink = ({ text, location, end }) => {
  return (
    <NavLinkStyled end={end} to={location}>
      {text}
    </NavLinkStyled>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
