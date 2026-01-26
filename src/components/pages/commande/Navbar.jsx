import styled from 'styled-components';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';

export default function Navbar({ username, onLogout }) {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide username={username} onLogout={onLogout} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  display: flex;
  background: purple;
  height: 10vh;
  width: 1400px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid blue;
  padding: 0 20px;
`;
