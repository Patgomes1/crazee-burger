import styled from 'styled-components';

export default function NavbarRightSide({ username, onLogout }) {
  return (
    <NavbarRightSideStyled>
      <p>Bonjour {username}</p>
      <button onClick={onLogout}>Se déconnecter</button>
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid orange;
  height: 100%;
`;
