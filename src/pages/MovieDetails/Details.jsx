import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';
import {
  Description,
  DescriptionWrapper,
  Poster,
  Title,
  DescriptionTitle,
  UsersScore,
  DescriptionText,
  AditionalWrapper,
  AditionaNavlList,
  AditionalNavItem,
  AditionalNavLink,
  AditionalTitle,
} from './Details.styled';
import { NavigateLink } from 'components/Link/NavigateLink';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Rewievs' },
  { href: 'posters', text: 'Backdrops' },
];

export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getFilmsDetailsById(movieId)
      .then(setFilmDetails)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!filmDetails) {
    return <h2>We don't have any information about this movie</h2>;
  }

  const { poster_path, title, release_date, popularity, overview, genres } =
    filmDetails;
  const genreList = [];

  genres.forEach(({ name }) => genreList.push(name));

  return (
    <main>
      <NavigateLink
        location={location.state?.from ?? '/'}
        text={'Go back'}
        icon={<BiArrowBack />}
      />
      <Description>
        <Poster
          src={`${BASE_IMG_URL}${poster_path}`}
          alt={title}
          width="240px"
          height="auto"
        />
        <DescriptionWrapper>
          <Title>
            {title} ({release_date.slice(0, 4)})
          </Title>
          <UsersScore>
            User score:
            <span>{Number.parseInt(popularity)}%</span>
          </UsersScore>
          <DescriptionTitle>Overview</DescriptionTitle>
          <DescriptionText>{overview}</DescriptionText>
          <DescriptionTitle>Genres</DescriptionTitle>
          <DescriptionText>{genreList.join(', ')}</DescriptionText>
        </DescriptionWrapper>
      </Description>
      <AditionalWrapper>
        <AditionalTitle>Aditional information</AditionalTitle>
        <AditionaNavlList>
          {navItems.map(({ href, text }) => (
            <AditionalNavItem key={href}>
              <AditionalNavLink to={href}>{text}</AditionalNavLink>
            </AditionalNavItem>
          ))}
        </AditionaNavlList>
        <Outlet />
      </AditionalWrapper>
    </main>
  );
};
