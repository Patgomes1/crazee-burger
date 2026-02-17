import styled from 'styled-components';
import Logo from '../../../reusable-ui/Logo';

export default function NavbarLeftSide({ onClick }) {
  return (
    <NavbarLeftSideStyled>
      <Logo className="logo" size="md" onClick={onClick} />
    </NavbarLeftSideStyled>
  );
}
const NavbarLeftSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  .logo {
    cursor: pointer;
  }
  //margin-left: 20px;
`;
