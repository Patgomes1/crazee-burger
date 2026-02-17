import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';

export default function NavbarRightSide({ username, onLogout }) {
  return (
    <NavbarRightSideStyled>
      <div className="admin-button">Admin</div>
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.regular};
  padding-right: 50px;

  .admin-button {
    background: ${theme.colors.lightBlue};
  }
`;
