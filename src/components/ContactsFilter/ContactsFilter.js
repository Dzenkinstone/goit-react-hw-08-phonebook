import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input } from './ContactsFilter.styled';
import { Paragraph } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input type="text" onChange={changeFilter} required />
    </>
  );
};
