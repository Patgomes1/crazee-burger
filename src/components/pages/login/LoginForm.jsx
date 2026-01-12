import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import { IoChevronForwardOutline } from 'react-icons/io5';
import TextInput from '../../reusable-ui/TextInput';
import { FaRegCircleUser } from 'react-icons/fa6';
import PrimaryButton from '../../reusable-ui/PrimaryButton';

export default function LoginForm({ onSuccess }) {
  //State
  const [username, setUsername] = useState('');

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    //setUsername("")
    onSuccess(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={username}
        onChange={handleChange}
        Icon={<FaRegCircleUser className="icon" />}
        placeholder={'Entrez votre prénom'}
        required
      />
      <PrimaryButton
        label={'Accéder à votre espace'}
        Icon={<IoChevronForwardOutline className="icon" />}
      />
    </LoginFormStyled>
  );
}

//styles
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  height: 438.31px;
  gap: 1rem;
  padding: 2.5rem 2rem;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  //background: transparent;
  h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 48px;
    font-weight: bold;
    color: ${theme.colors.white};
  }
  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    font-size: 36px;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
  }
  hr {
    width: 400px;
    border: 1px solid ${theme.colors.primary_burger};
    margin-bottom: 40px;
    margin-top: -10px;
    margin-bottom: auto;
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

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-left: 10px;
  }
  /* button:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    cursor: pointer;
  } */
`;
