import React from 'react';
import styled from 'styled-components';
import Product from '../Product';
import { useState } from 'react';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => (
        <Product {...product} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
`;
