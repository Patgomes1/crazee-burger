import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Logo from '../../reusable-ui/Logo';

export default function OrderPage() {
  //State
  const navigate = useNavigate();
  const location = useLocation(); // ← hook à ajouter
  const username = location.state?.username || 'Erreur utilisateur';

  //Comportement
  const handleClick = () => {
    navigate('/');
  };
  //console.log("username = " + username);

  //Affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Logo size="md" />
          </div>
          <div className="user-info">
            <h1>Bonjour {username}</h1>
            <button onClick={handleClick}>Déconnexion</button>
          </div>
        </nav>
        <div className="main">main</div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: wheat;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;

    .navbar {
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
        //margin-left: 20px;
      }
      .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 2px solid orange;
      }
    }
    .main {
      flex-grow: 1;
      background: lightgray;
      color: black;
      border: 2px solid green;
    }
  }
`;
