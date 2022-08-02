import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h2>
        Page not found, Go to <Link to="/">Home page</Link>
      </h2>
    </>
  );
};
