import { useState, useEffect } from 'react';
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
      <Additional />
    </main>
  );
};
