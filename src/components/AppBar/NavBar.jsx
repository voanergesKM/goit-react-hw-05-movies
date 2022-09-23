import { Outlet } from 'react-router-dom';
import { Link, Nav, StyledHeader } from './NavBar.styled';

export const AppBar = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <Link end to="/">
            Home
          </Link>
          <Link to="movies">Films</Link>
        </Nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
