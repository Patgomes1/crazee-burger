import styled from 'styled-components';
import burgerBg from '../../../assets/burger-bg.jpg';

export const LoginPageStyled = styled.div`
  min-height: 100dvh;
  width: 100vw;

  background-image: url(${burgerBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
