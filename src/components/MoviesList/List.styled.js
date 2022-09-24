import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-left: 24px;
`;

export const StyledItem = styled.li`
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
