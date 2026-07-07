import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import OrderContext from '../../../context/OrderContext.jsx';
import { fakeMenu } from '../../../fakeData/fakeMenu.jsx';
import { EMPTY_PRODUCT } from './Main/Admin/AdminPanel/AddForm.jsx';

export default function OrderPage() {
  //State
  const navigate = useNavigate();
  const location = useLocation(); // ← hook à ajouter
  const username = location.state?.username || 'Erreur utilisateur';
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState('add');
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //Comportement
  const handleClick = () => {
    navigate('/');
  };

  const handleAddProduct = (newProduct) => {
    const copyMenu = [...menu];
    const UpdatedMenu = [newProduct, ...copyMenu];
    setMenu(UpdatedMenu);
  };
  const handleDelete = (id) => {
    const copyMenu = [...menu];
    const updatedMenu = copyMenu.filter((product) => product.id !== id);
    setMenu(updatedMenu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
  };

  //Affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <div className="navbar-container">
            <Navbar username={username} />
          </div>
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: ${theme.colors.primary};

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    overflow-y: scroll;

    .navbar-container {
      position: sticky;
      top: 0;
      z-index: 1;
      border-bottom-color: ${theme.colors.lightGray};
    }
  }
`;
