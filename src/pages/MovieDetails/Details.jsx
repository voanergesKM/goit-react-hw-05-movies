import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';
import {
  Description,
  DescriptionWrapper,
  Title,
  DescriptionTitle,
  UsersScore,
  DescriptionText,
} from './Details.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Rewievs' },
];

export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();

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
      <Description>
        <img
          src={`${BASE_IMG_URL}${poster_path}`}
          alt={title}
          width="320px"
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
      <div>
        <p>Aditional information</p>
        <ul>
          {navItems.map(({ href, text }) => (
            <li key={href}>
              <Link to={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
