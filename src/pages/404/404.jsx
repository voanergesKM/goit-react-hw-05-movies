import {
  Container,
  HomeLink,
  PageTitle,
  Thumb,
  Title,
  Wrapper,
} from './404.styled';

export const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <Thumb>
          <PageTitle>Oops!</PageTitle>
          <Title>404 - The Page can't be found</Title>
        </Thumb>
        <HomeLink to="/">Go TO Homepage</HomeLink>
      </Wrapper>
    </Container>
  );
};
