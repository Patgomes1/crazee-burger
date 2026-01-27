import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Logo size="md" />
    </NavbarLeftSideStyled>
  );
}
const NavbarLeftSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  //margin-left: 20px;
`;
