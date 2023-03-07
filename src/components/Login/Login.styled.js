import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const MainForm = styled(Form)`
  align-items: center;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 40px;
  border: 2px solid rgb(0, 191, 255);
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  width: 250px;
  &:focus {
    outline: none;
    border: 2px solid rgb(0, 191, 255);
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 10px;
  font-size: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  background-color: white;
  border: 1px solid rgb(192, 192, 192);
  padding: 2px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;
