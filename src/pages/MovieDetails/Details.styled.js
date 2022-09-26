import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
  margin-bottom: 8px;
  padding: 16px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (min-width: 768px) {
    display: flex;

    gap: 24px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const Poster = styled.img`
  max-width: 240px;
  flex-shrink: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const UsersScore = styled.p`
  display: flex;
  gap: 6px;
  font-size: 16px;
  margin-left: 8px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 18px;
  margin-left: 8px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-left: 8px;
  max-width: 600px;
`;

export const AditionalWrapper = styled.div`
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const AditionalTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 24px;
  margin-left: 8px;
`;

export const AditionaNavlList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  list-style: none;
  gap: 16px;
`;

export const AditionalNavItem = styled.li``;

export const AditionalNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;
