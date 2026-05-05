import React from 'react';
import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function AdminTabs({}) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={<FiChevronDown className="icon" />}
        //label={'Ajouter un produit'}
      />
      <Tab
        className={'ajouter'}
        Icon={<IoChevronForwardOutline className="icon" />}
        label={'Ajouter un produit'}
      />
      <Tab className={'modifier'} label={'Modifier un produit'} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  //border: 1px solid red;
  color: black;
  display: flex;
  flex-direction: row;
  .icon {
    width: 16px;
    height: 16px;
  }
  .ajouter {
    background-color: lightgreen;
  }
  .modifier {
    background-color: lightblue;
  }
`;
