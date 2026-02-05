import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar';
import Main from './Main';

export default function OrderPage() {
  //State
  const navigate = useNavigate();
  const location = useLocation(); // ← hook à ajouter
  const username = location.state?.username || 'Erreur utilisateur';

  //Comportement
  const handleClick = () => {
    navigate('/');
  };

  //Affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar-container">
          <Navbar username={username} />
        </div>
        <Main />
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
  background: ${theme.colors.primary};

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    overflow: scroll;

    .navbar-container {
      position: sticky;
      top: 0;
      z-index: 1;
    }
  }
`;
