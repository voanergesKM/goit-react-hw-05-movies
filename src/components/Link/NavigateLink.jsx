import { NavLinkStyled } from './NavigateLink.styled';

export const NavigateLink = ({ icon: Icon, text, location }) => {
  return (
    <NavLinkStyled to={location}>
      {Icon}
      {text}
    </NavLinkStyled>
  );
};
