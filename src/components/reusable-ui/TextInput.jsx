import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({
  className,
  value,
  onChange,
  Icon,
  version = 'normal',
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    outline: none;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props) => {
    if (props.version === 'normal') return extraStyleNormal;
    if (props.version === 'minimalist') return extraStyleMinimalist;
  }}
`;
const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  margin: 18px 0px;
  padding: 18px 24px;
  width: 100%;

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  width: 645px;
  height: 35px;

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;
