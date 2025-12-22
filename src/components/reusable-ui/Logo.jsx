import React from 'react'
import logo from '../../assets/logo-orange.png'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function Logo() {
  return (
    <LogoContainer>
      CRAZEE <LogoImage src={logo} alt="Logo" /> BURGER
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Amatic SC', cursive;
  font-size: 110px;
  font-weight: 700;
  font-style: bold;
  line-height: 115px;
  letter-spacing: 1.5px;
  color: ${theme.colors.primary};
`;

const LogoImage = styled.img`
width: 200px;
height: 150px;
top: 30px;
margin: 0 0.5rem;
`;

