import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  padding: 16px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const UsersScore = styled.p`
  display: flex;
  gap: 6px;
  font-size: 20px;
  margin-bottom: 16px;
  margin-left: 8px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  margin-left: 8px;
`;

export const DescriptionText = styled.p`
  font-size: 18px;

  margin-left: 8px;
  max-width: 600px;

  :not(:last-child) {
    margin-bottom: 32px;
  }
`;
