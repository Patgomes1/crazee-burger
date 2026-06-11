import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <div className="message">
        <strong>Victime de notre succès ! :D</strong>
        <p>De nouvelles recettes sont en cours de préparation.</p>
        <p>À très vite !</p>
      </div>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};

  .message {
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: ${theme.fonts.size.P4};
  }
`;
