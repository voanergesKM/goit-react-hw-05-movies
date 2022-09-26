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

export const AditionaNavlList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
`;
