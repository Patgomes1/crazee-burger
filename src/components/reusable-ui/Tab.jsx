import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Tab({ className, Icon, label, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && Icon}
      <span>{label}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;

  position: relative;
  left: 5%;
  top: 1px;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  &:active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
`;
