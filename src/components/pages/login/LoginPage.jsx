import { useState } from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
//import { LoginPageStyled } from './LoginPageStyled'
// import Logo from './Logo'
import Logo from "../../reusable-ui/Logo";



export default function LoginPage() {

    //State
    const navigate = useNavigate()

    //Comportement

    //Affichage
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm
                onSuccess = {(username) =>{
                    navigate("/order", {state: { username }})
                }} />
        
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
  min-height: 100dvh;
  width: 100vw;

  background-image: url("src/assets/burger-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-blend-mode: darken;
`;


