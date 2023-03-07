import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { List, Text, Button, Item } from './ContactsList.styled';

export const ContactsList = props => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {props.children}
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <Button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
