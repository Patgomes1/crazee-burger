import styled from 'styled-components';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';
import { theme } from '../../../theme';

export default function Navbar({ username, onLogout }) {
  return (
    <NavbarStyled>
      <NavbarLeftSide onClick={() => window.location.reload()} />
      <NavbarRightSide username={username} onLogout={onLogout} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  display: flex;
  background: ${theme.colors.white};
  height: 10vh;
  width: 1400px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
