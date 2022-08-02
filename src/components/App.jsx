import { MovieDetails } from 'Pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Movies } from '../Pages/Movies';
import { Cast } from './Cast/Cast';
import { Navigation } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from 'Pages/NotFound';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
