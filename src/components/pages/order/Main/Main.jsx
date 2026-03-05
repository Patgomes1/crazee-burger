import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';
import Basket from './Basket';

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  overflow-y: scroll;

  .basket {
    background: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    .admin {
      height: 250px;
      background: ${theme.colors.background_dark};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
