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
  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    if (tabSelected === 'add') {
      setIsAddTabSelected(true);
      setIsEditTabSelected(false);
    } else if (tabSelected === 'edit') {
      setIsAddTabSelected(false);
      setIsEditTabSelected(true);
    }
  };

  const tabsConfig = [
    {
      label: '',
      Icon: isCollapsed ? (
        <FiChevronUp className="icon" />
      ) : (
        <FiChevronDown className="icon" />
      ),
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? 'is-active' : '',
    },
    {
      label: 'Ajouter un produit',
      Icon: <AiOutlinePlus className="icon" />,
      onClick: () => selectTab('add'),
      className: isAddTabSelected ? 'is-active' : '',
    },
    {
      label: 'Modifier un produit',
      Icon: <MdModeEditOutline className="icon" />,
      onClick: () => selectTab('edit'),
      className: isEditTabSelected ? 'is-active' : '',
    },
  ];

  //Affichage
  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => (
        <Tab
          key={tab.label}
          Icon={tab.Icon}
          label={tab.label}
          onClick={tab.onClick}
          className={tab.className}
        />
      ))}
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
