import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

export default function NavbarRightSide({ username, onLogout }) {
  //State
  const { isAdmin, setIsAdmin } = useContext(OrderContext);
  //Comportement
  const handleAdminClick = () => {
    const newValue = !isAdmin;
    setIsAdmin(newValue);

    if (newValue) {
      toast.info('Mode admin activé', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 5000,
      });
    } else {
      /* toast.info('Mode admin désactivé', {
        theme: 'dark',
        position: 'bottom-right',
      }); */
    }
  };

  //Affichage
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin</div> */}
      <ToggleButton
        className="admin-button"
        isChecked={isAdmin}
        onToggle={handleAdminClick}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.regular};
  padding-right: 50px;

  .admin-button {
    background: ${theme.colors.lightBlue};
    margin-right: 50px;
  }
`;
