import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  gap: 12px;
`;

export const StyledItem = styled.li`
  padding: 8px;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Photo = styled.img`
  margin-bottom: 8px;
`;

export const Description = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
