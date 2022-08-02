import axios from 'axios';

const KEY_API = 'a1fbf574afa240654ce82ff2490808e3';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: KEY_API,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const getPoPMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/day');
  return data.results;
};
export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};
export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};
export const getCastMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};
export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data.results;
};
