import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';
import { Link } from 'components/Link/NavigateLink';
import { DetailsTitle } from 'components/PageTitle/Titles';
import { Description } from 'components/Description/FilmDescription';
import { Additional } from 'components/AdditionalInf/AdditionalInf';

export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    getFilmsDetailsById(Number(movieId))
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
        to={locationRef.current.state?.from ?? '/'}
        text={'Go back'}
        icon={<BiArrowBack />}
      />

      <Description movie={filmDetails} />
      <Additional />
    </main>
  );
};
