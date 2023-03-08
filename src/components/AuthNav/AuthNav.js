import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { Button, Container, Link, Text } from './AuthNav.styled';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Text>Wellcome, {name}</Text>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
    </Container>
  );
};
