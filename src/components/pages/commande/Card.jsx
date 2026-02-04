import styled from 'styled-components';

//State

//Comportement

// Affichage
export default function Card() {
  return <CardStyled>Card</CardStyled>;
}

const CardStyled = styled.div`
  background: brown;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  height: 240px;
  width: 330px;
`;
