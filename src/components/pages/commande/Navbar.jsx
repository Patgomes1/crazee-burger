import React from 'react';
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';

export default function Navbar({ username, onLogout }) {
  return (
    <NavbarStyled>
      <div className="logo">
        <Logo size="md" />
      </div>
      <div className="user-info">
        <p>Bonjour {username}</p>
        <button onClick={onLogout}>Se déconnecter</button>
      </div>
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

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid yellow;
    height: 100%;
    //margin-left: 20px;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid orange;
    height: 100%;
  }
`;
