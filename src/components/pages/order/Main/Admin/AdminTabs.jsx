import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig } from './getTabsConfig';

export default function AdminTabs() {
  //State
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  //Comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected);

  //Affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
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
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          Icon={tab.Icon}
          label={tab.label}
          onClick={() => selectTab(tab.index)}
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
