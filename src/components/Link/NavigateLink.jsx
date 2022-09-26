import PropTypes from 'prop-types';
import { NavLinkStyled, LinkStyled } from './NavigateLink.styled';

export const Link = ({ icon: Icon, text, location }) => {
  return (
    <NavLinkStyled to={location}>
      {Icon}
      {text}
    </NavLinkStyled>
  );
};

export const NavLink = ({ text, location, end }) => {
  return (
    <LinkStyled end={end} to={location}>
      {text}
    </LinkStyled>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  // location: PropTypes.object,
  Icon: PropTypes.node,
};
