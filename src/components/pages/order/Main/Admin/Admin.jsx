import React from 'react';
import { theme } from '../../../../../theme';
import styled from 'styled-components';

export default function Admin() {
  return <AdminStyled>admin</AdminStyled>;
}

const AdminStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 8px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.medium} inset;
  color: ${theme.colors.dark};
`;
