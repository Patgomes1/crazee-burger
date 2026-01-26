import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return <MainStyled>main1</MainStyled>;
}

const MainStyled = styled.div`
  flex-grow: 1;
  background: lightgray;
  color: black;
  border: 2px solid green;
`;
