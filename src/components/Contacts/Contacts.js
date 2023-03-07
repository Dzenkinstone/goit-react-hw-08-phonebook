import { Container, Wrapper } from './Contacts.styled';
import { ContactsTitle } from 'components/ContactsTitle';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter';
import { ContactsList } from 'components/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

import { TailSpin } from 'react-loader-spinner';
import { selectIsError, selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsTitle text="Phonebook" />
      <ContactsForm />
      <ContactsTitle text="Contacts" />
      <ContactsFilter />
      <ContactsList>
        {isLoading && (
          <Wrapper>
            <TailSpin
              height="20"
              width="20"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            Loading...
          </Wrapper>
        )}
        {error && <strong>{error}</strong>}
      </ContactsList>
    </Container>
  );
};
