import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({ className, label, Icon, onClick }) {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      <span>{label}</span>
      {/* <div className="icon">{Icon && Icon}</div> */}
      {Icon && <div className="icon">{Icon}</div>}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  /*   .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-left: 10px;
  } */

  /*     height: 53px;
    background-color: ${theme.colors.primary_burger};
    padding: 16px 8px;
    gap: 12.8px;
    border-radius: 5px;
    margin: 0px 32px 40px 32px; */
`;
