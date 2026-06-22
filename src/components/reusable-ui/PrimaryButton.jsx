import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({
  className,
  label,
  Icon,
  onClick,
  version = 'normal',
}) {
  return (
    <PrimaryButtonStyled
      className={className}
      onClick={onClick}
      version={version}
    >
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
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
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
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.success};
  width: 275px;
  height: 34px;
  font-size: ${theme.fonts.size.XS};
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.fonts.weights.bold};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
