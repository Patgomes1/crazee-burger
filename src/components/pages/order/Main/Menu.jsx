import styled from 'styled-components';
import Card from '../../../reusable-ui/Card';
import { useContext } from 'react';
import { theme } from '../../../../theme';
import { formatPrice } from '../../../../utils/maths';
import OrderContext from '../../../../context/OrderContext';

const IMAGE_BY_DEFAULT = 'public/images/coming-soon.png';

export default function Menu() {
  //State
  const { menu, setMenu, isAdmin } = useContext(OrderContext);

  //Comportement

  //Affichage
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            isDeleteButtonVisible={isAdmin}
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
