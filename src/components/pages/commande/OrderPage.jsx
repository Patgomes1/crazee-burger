import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';

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
      <h1>Bonjour {username}</h1>
      <button onClick={handleClick}>Déconnexion</button>
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
`;
