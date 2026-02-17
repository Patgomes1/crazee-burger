import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';
import Basket from './Basket';

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex-grow: 1;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
`;
