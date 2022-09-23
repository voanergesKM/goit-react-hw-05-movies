import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 26px;
  margin-left: 16px;

  margin-bottom: 16px;
`;

export const StyledList = styled.ul`
  margin-left: 24px;
`;

export const StyledItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover,
  :focus {
    color: orangered;
  }
`;
