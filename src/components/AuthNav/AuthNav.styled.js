import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.strong`
  color: black;
`;

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  &:hover {
    color: red;
  }
`;
