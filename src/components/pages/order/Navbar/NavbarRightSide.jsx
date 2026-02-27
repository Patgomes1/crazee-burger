import styled from 'styled-components';
import { theme } from '../../../../theme';
import Profile from './Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { useState } from 'react';

export default function NavbarRightSide({ username, onLogout }) {
  //State
  const [isAdmin, setIsAdmin] = useState(false);

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.regular};
  padding-right: 50px;

  .admin-button {
    background: ${theme.colors.lightBlue};
    margin-right: 50px;
  }
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
