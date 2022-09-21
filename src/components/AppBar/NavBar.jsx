import { Outlet } from 'react-router-dom';
import { Link, Nav, StyledHeader } from './NavBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'films', text: 'Films' },
];

export const AppBar = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          {navItems.map(({ href, text }) => (
            <Link end key={href} to={href}>
              {text}
            </Link>
          ))}
        </Nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};
