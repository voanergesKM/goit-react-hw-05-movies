import { Outlet } from 'react-router-dom';
import { Nav, StyledHeader } from './NavBar.styled';
import { NavLink } from 'components/Link/NavigateLink';

export const AppBar = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <NavLink to="/" text="Home" end />
          <NavLink to="movies" text="Films" />
        </Nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
