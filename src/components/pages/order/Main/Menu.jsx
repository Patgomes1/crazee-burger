import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { useState } from 'react';
import { fakeMenu } from '../../../../fakeData/fakeMenu';
import { theme } from '../../../../theme';
import { formatPrice } from '../../../../utils/maths';

export default function Menu() {
  //State
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const newProduct = {
    id: Date.now(),
    title: 'Burger',
    imageSource:
      'https://burgeraddict.fr/wp-content/uploads/2024/09/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
    price: 5.8,
  };

  //Comportement
  const handleAddProduct = () => {
    const copyMenu = [...menu];
    const UpdatedMenu = [newProduct, ...copyMenu];
    setMenu(UpdatedMenu);
  };

  //Affichage
  return (
    <MenuStyled className="menu">
      <button onClick={handleAddProduct}>Ajouter</button>;
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
