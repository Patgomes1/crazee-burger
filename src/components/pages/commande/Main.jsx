import styled from 'styled-components';
import { theme } from '../../../theme';
import Card from './Card';

export default function Main() {
  return (
    <MainStyled>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex-grow: 1;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
`;
