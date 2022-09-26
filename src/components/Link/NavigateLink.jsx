import PropTypes from 'prop-types';
import { NavLinkStyled } from './NavigateLink.styled';

export const NavigateLink = ({ icon: Icon, text, location }) => {
  return (
    <NavLinkStyled to={location}>
      {Icon}
      {text}
    </NavLinkStyled>
  );
};

NavigateLink.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  Icon: PropTypes.node,
};
