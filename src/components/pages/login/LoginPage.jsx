import { useState } from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { LoginPageStyled } from './LoginPageStyled'
import Logo from './Logo'


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

/* const LoginPageStyled = styled.div`min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${burgerBg});

  background-size: cover;
  background-position: center;
`; */


