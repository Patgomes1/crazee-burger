import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import Button from '../../../../reusable-ui/Button';
import { theme } from '../../../../../theme';

export default function EmptyMenuAdmin() {
  //State
  const { resetMenu } = useContext(OrderContext);

  //Comportement

  //Affichage
  return (
    <EmptyMenuAdminStyled>
      <div className="message">
        <strong>Le menu est vide ?</strong>
        <p>Cliquez ci-dessous pour le réinitialiser.</p>
      </div>
      <Button
        className={'add-product-button'}
        label={'Générer de nouveaux produits'}
        onClick={resetMenu}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${theme.colors.greyBlue};

  .message {
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: ${theme.fonts.size.P4};
  }

  .add-product-button {
    font-size: ${theme.fonts.size.XS};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 224px;
    height: 50px;
  }
`;
