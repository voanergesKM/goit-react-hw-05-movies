import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsDetailsById } from 'components/TheMoviesApi/MoviesAPI';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Rewievs' },
];

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmsDetailsById(movieId).then(setFilm);
  }, [movieId]);

  if (!film) {
    return;
  }

  const { poster_path, title, release_date, popularity, overview, genres } =
    film;
  const genreList = [];

  genres.forEach(element => {
    genreList.push(element.name);
  });

  return (
    <main>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="320px"
        />
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>
          <span>User score: </span>
          {Number.parseInt(popularity)}%
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genreList.join(', ')}</p>
      </div>
      <div>
        <p>Aditional information</p>
        <ul>
          {navItems.map(({ href, text }) => (
            <Link key={href} to={href}>
              {text}
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
