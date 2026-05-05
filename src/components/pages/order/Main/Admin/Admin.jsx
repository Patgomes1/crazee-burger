import React, { useState } from 'react';
import { theme } from '../../../../../theme';
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';

export default function Admin() {
  //state
  const [isCollapsed, setIsCollapsed] = useState(false);

  //comportement

  //affichage
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
