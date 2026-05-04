import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <h2>Admin Panel</h2>
    </AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.medium} inset;
`;
