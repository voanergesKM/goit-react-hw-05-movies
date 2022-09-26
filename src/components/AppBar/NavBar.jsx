import { Outlet } from 'react-router-dom';
import { Nav, StyledHeader } from './NavBar.styled';
import { NavLink } from 'components/Link/NavigateLink';

export const AppBar = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <NavLink location="/" text="Home" end />
          <NavLink location="movies" text="Films" />
        </Nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
