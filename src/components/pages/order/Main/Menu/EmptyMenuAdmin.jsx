import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';
import { theme } from '../../../../../theme';

export default function EmptyMenuAdmin() {
  //State
  const { resetMenu } = useContext(OrderContext);

  //Comportement

  //Affichage
  return (
    <EmptyMenuAdminStyled>
      <div className="message">
        <b>Le menu est vide ?</b>
        <p>Cliquez ci-dessous pour le réinitialiser.</p>
      </div>
      <PrimaryButton
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
  color: gray;

  .message {
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: 2rem;
  }

  .add-product-button {
    font-size: 1rem;
  }
`;
