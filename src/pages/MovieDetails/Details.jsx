import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';
import { AditionalWrapper, AditionaNavlList } from './Details.styled';
import { Link, NavLink } from 'components/Link/NavigateLink';
import { DetailsTitle, Title } from 'components/PageTitle/Titles';
import { Description } from 'components/Description/FilmDescription';

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
    return (
      <DetailsTitle>
        We don't have any information about this movie
      </DetailsTitle>
    );
  }

  return (
    <main>
      <Link
        location={location.state?.from ?? '/'}
        text={'Go back'}
        icon={<BiArrowBack />}
      />
      <Description movie={filmDetails} />
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
