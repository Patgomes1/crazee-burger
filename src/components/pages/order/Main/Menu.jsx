import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
`;
