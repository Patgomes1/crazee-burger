import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


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
          <input value={username} type="text" name="username" placeholder='Entrez votre prénom' onChange={handleChange} required />
          <button type="submit">Accéder à mon espace</button>
    </LoginFormStyled>
  )
}

//styles
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: red;
`;
