import { useLocation } from 'react-router-dom';
import { Link, Container, Header, List } from './Navigation.styled';

export const Navigation = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <Link
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                state={{ from: location }}
                to="/movies"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Movies
              </Link>
            </li>
          </List>
        </nav>
      </Header>
    </Container>
  );
};
