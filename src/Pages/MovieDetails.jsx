import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getDetailsMovies } from 'service/service';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <button type="button">Go back</button>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
            }
            alt=""
          />
          <div>
            <h2>
              {details.title ? details.title : details.name}{' '}
              {details.release_date}
            </h2>
            <p>User Score: {Math.round((details.vote_average / 10) * 100)}%</p>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <p>{details.genres.map(item => item.name).join(', ')}</p>
          </div>
          <h3>Additional information</h3>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
};
