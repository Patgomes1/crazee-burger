import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../theme';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {
  //State
  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  } = useContext(OrderContext);

  //Comportement

  //Affichage
  return (
    <AdminTabsStyled>
      <Tab
        Icon={
          isCollapsed ? (
            <FiChevronUp className="icon" />
          ) : (
            <FiChevronDown className="icon" />
          )
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? 'is-active' : ''}
      />
      <Tab
        Icon={<AiOutlinePlus className="icon" />}
        label={'Ajouter un produit'}
        onClick={() => {
          setIsAddTabSelected(true);
          setIsEditTabSelected(false);
          setIsCollapsed(false);
        }}
        className={isAddTabSelected ? 'is-active' : ''}
      />
      <Tab
        Icon={<MdModeEditOutline className="icon" />}
        label={'Modifier un produit'}
        onClick={() => {
          setIsAddTabSelected(false);
          setIsEditTabSelected(true);
          setIsCollapsed(false);
        }}
        className={isEditTabSelected ? 'is-active' : ''}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  //border: 1px solid red;
  color: black;
  display: flex;
  flex-direction: row;
  .icon {
    width: 16px;
    height: 16px;
  }
  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
