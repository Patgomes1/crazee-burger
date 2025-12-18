import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { FaRegCircleUser } from "react-icons/fa6";


export default function LoginForm({onSuccess}) {

    //State 
    const [username, setUsername] = useState("")

    //Comportement
    const handleSubmit = (event) => {
      event.preventDefault()
      //setUsername("")
      onSuccess(username)
    }
    
    const handleChange = (event) => {
      setUsername(event.target.value)
    }

    //Affichage
  return (
    <LoginFormStyled 
    onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <div className ="input-icon">
            <FaRegCircleUser />
            <input value={username} type="text" name="username" placeholder='Entrez votre prénom' onChange={handleChange} required />
          </div>
          <button type="submit">Accéder à mon espace</button>
    </LoginFormStyled>
  )
}

//styles
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 464px;
  height: 438.31px;
  gap: 1rem;
  padding: 16px 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: transparent;
  h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 61px;
    font-weight: bold;
    color: ${theme.colors.white};
  }
  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    font-size: 46px;
    color: ${theme.colors.white};
  }
  input {
    width: 400px;
    height: 53px;
    background-color: ${theme.colors.white};
    padding: 16px 8px;
    gap: 12.8px;
    border-radius: 5px;
    color: ${theme.colors.greyDark};
    margin: 0px 32px;
  }
  button {
    width: 400px;
    height: 53px;
    background-color: ${theme.colors.primary_burger};
    padding: 16px 8px;
    gap: 12.8px;
    border-radius: 5px;
    margin: 0px 32px 40px 32px;

  }
  button:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
  }
  .input-icon{
    position: relative;
    svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: ${theme.colors.greyDark};
    }
  }
`;
