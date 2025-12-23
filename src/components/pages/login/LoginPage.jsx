import { useState } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
//import { LoginPageStyled } from './LoginPageStyled'
// import Logo from './Logo'
import Logo from '../../reusable-ui/Logo';

export default function LoginPage() {
  //State
  const navigate = useNavigate();

  //Comportement

  //Affichage
  return (
    <LoginPageStyled>
      <Logo size="lg" />
      <LoginForm
        onSuccess={(username) => {
          navigate('/order', { state: { username } });
        }}
      />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('src/assets/burger-bg.jpg');
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
