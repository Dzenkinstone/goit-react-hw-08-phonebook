import { React } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  MainForm,
  Input,
  Label,
  Button,
  Error,
  Container,
} from './Login.styled';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <MainForm>
        <Container>
          <Label htmlFor="email">
            Email
            <Input
              type="email"
              name="email"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Error name="name" component="div" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Error name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </Container>
      </MainForm>
    </Formik>
  );
};
