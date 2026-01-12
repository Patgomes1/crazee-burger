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
  border-radius: 5px;
  padding: 18px 24px;
  margin: 18px 0px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 400px;
  height: 55px;
  background-color: ${theme.colors.white};

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greyBlue};
  }

  input {
    margin-left: auto;
    border: none;
    outline: none;
    flex: 1;
  }

  &::placeholder {
    background: white;
    color: ${theme.colors.greyBlue};
  }
`;
