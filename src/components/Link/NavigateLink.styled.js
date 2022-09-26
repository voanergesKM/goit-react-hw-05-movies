import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(Link)`
  margin-left: 16px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;

  transition: all 250ms linear;

  :hover,
  :focus {
    color: orangered;
  }
`;
