import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

export default function EmptyMenuAdmin() {
  //State
  const { resetMenu } = useContext(OrderContext);

  //Comportement

  //Affichage
  return (
    <EmptyMenuAdminStyled>
      <button onClick={resetMenu}>Ajouter un produit</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  color: gray;
`;
