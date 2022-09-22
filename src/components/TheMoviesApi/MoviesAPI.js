import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '95f6ab543b8413111ce7e57b1a77d9dc';

export const getTrandings = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return response.data.results;
};

export const getFilmsByKeywords = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  console.log(
    'getFilmsByKeywords : response.data.results',
    response.data.results
  );
  return response.data.results;
};

export const getFilmsDetailsById = async filmId => {
  const response = await axios.get(
    `movie/${filmId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
