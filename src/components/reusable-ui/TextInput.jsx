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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  margin: 18px 0px;

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    width: 400px;
    height: 53px;
    background-color: ${theme.colors.white};
    padding: 16px 8px;
    gap: 12.8px;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.greyDark};
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
