import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { theme } from '../../../../../theme';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

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
        className={''}
        Icon={<AiOutlinePlus className="icon" />}
        label={'Ajouter un produit'}
      />
      <Tab
        className={''}
        Icon={<MdModeEditOutline className="icon" />}
        label={'Modifier un produit'}
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
