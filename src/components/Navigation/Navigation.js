import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import {
  Navigation,
  List,
  Item,
  Link,
  Container,
  Text,
  Button,
} from './Navigation.styled';

const NavigationBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Navigation>
      <List>
        <Item>
          <Link to="/" end>
            Home
          </Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </Item>
        <Item>
          {isLoggedIn ? (
            <Container>
              <Text>Wellcome, {name}</Text>
              <Button onClick={() => dispatch(logOut())}>Logout</Button>
            </Container>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Log in</Link>
            </>
          )}
        </Item>
      </List>
    </Navigation>
  );
};

export default NavigationBar;
