import styled from 'styled-components';

//State

//Comportement

// Affichage
export default function Card() {
  return (
    <CardStyled>
      <img src="public/images/burger2.png" alt="Card" />
      <h3>fakeMenu.title</h3>
      <p>Description de la carte</p>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: brown;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  height: 330px;
  width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 145px;
    border-radius: 8px;
  }
`;
