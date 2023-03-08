import { AuthNav } from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation, List, Item, Link } from './Navigation.styled';

const NavigationBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
          <AuthNav />
        </Item>
      </List>
    </Navigation>
  );
};

export default NavigationBar;
