import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getDetailsMovies } from 'service/service';
import { Link } from 'react-router-dom';
import { NotFound } from './NotFound';
import { BackButton } from './MovieDetails.styled';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <Container>
      {details ? (
        <Container>
          <BackButton
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </BackButton>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
            }
            alt=""
            width="400"
          />
          <div>
            <h2>
              {details.title ? details.title : details.name} (
              {details.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round((details.vote_average / 10) * 100)}%</p>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <p>{details.genres.map(item => item.name).join(', ')}</p>
          </div>
          <h3>Additional information</h3>
          <Link state={{ from: location?.state?.from ?? '/' }} to="cast">
            Cast
          </Link>
          <Link state={{ from: location?.state?.from ?? '/' }} to="reviews">
            Reviews
          </Link>
          <br />
          <Outlet />
        </Container>
      ) : (
        <NotFound />
      )}
    </Container>
  );
};

export default MovieDetails;
