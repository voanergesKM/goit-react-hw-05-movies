import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';
import {
  Description,
  DescriptionWrapper,
  Poster,
  DescriptionText,
  AditionalWrapper,
  AditionaNavlList,
} from './Details.styled';
import { Link, NavLink } from 'components/Link/NavigateLink';
import {
  DetailsTitle,
  MainTitle,
  Title,
  Text,
} from 'components/PageTitle/Titles';

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
      <Link
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
          <MainTitle text={`${title} (${release_date.slice(0, 4)})`} />
          <Text text={'User score:'}>
            <span>{Number.parseInt(popularity)}%</span>
          </Text>
          <DetailsTitle text={'Overview'} />
          <Text text={overview} />
          <DetailsTitle text={'Genres'} />
          <Text text={genreList.join(', ')} />
        </DescriptionWrapper>
      </Description>
      <AditionalWrapper>
        <Title text={'Aditional information'} />
        <AditionaNavlList>
          {navItems.map(({ href, text }) => (
            <li key={href}>
              <NavLink location={href} text={text} />
            </li>
          ))}
        </AditionaNavlList>
        <Outlet />
      </AditionalWrapper>
    </main>
  );
};
