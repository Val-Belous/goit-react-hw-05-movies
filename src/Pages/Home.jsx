import { getPoPMovies } from 'service/service';
import { useEffect, useState } from 'react';
// import { Movies } from 'Pages/Movies/Movies';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPoPMovies().then(setFilms);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.map(el => {
          return (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>
                {el.title ? el.title : el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
