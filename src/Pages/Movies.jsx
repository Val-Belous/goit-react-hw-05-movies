import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getSerchMovies } from 'service/service';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get('query') === null) {
      return;
    }
    getSerchMovies(searchParams.get('query')).then(setMovie);
  }, [searchParams, setMovie]);

  const handlerInput = evt => {
    setQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" value={query} onChange={handlerInput} />
        <button type="submit">Search</button>
      </form>
      {movie.length ? (
        <ul>
          {movie &&
            movie.map(item => {
              return (
                <li key={item.id}>
                  <Link state={{ from: location }} to={`/movies/${item.id}`}>
                    {item.title ? item.title : item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      ) : (
        <h3>There is no films yet</h3>
      )}
    </>
  );
};
