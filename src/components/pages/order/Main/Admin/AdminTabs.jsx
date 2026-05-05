import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../theme';

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  //State

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
        className={'ajouter'}
        Icon={<IoChevronForwardOutline className="icon" />}
        label={'Ajouter un produit'}
      />
      <Tab className={'modifier'} label={'Modifier un produit'} />
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
  .ajouter {
    background-color: lightgreen;
  }
  .modifier {
    background-color: lightblue;
  }
  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
