import { getPoPMovies } from 'service/service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './MovieDetails.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPoPMovies().then(setFilms);
  }, []);

  return (
    <Container>
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
    </Container>
  );
};

export default Home;
