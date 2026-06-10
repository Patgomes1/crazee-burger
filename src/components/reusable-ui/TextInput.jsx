import styled from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled className="input-with-icon">
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  margin: 18px 0px;
  padding: 18px 24px;
  width: 100%;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
    margin-right: ${theme.spacing.sm};
    color: ${theme.colors.greySemiDark};
    padding-left: 10px;
  }

  input {
    border: none;
    outline: none;
    font-size: ${theme.fonts.size.SM};
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.dark};
    width: 100%;
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
