import styled from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled className="input-with-icon">
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  border: 1px solid ${theme.colors.greyDark};
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  margin: 18px 0px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 400px;
  height: 55px;
  background-color: ${theme.colors.white};

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: -18px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    margin-left: 8px;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
