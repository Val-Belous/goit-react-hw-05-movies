import { useState, useEffect } from 'react';
import { getCastMovies } from 'service/service';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  console.log(cast);

  useEffect(() => {
    getCastMovies(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <>
      {
        <ul>
          {cast.length &&
            cast.map(item => (
              <CastItem
                key={item.id}
                name={item.name}
                character={item.character}
                img={item.profile_path}
              ></CastItem>
            ))}
        </ul>
      }
    </>
  );
};
