import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

export const getTabsConfig = (currentTabSelected) => [
  /* {
      label: '',
      Icon: isCollapsed ? (
        <FiChevronUp className="icon" />
      ) : (
        <FiChevronDown className="icon" />
      ),
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? 'is-active' : '',
    }, */
  {
    index: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus className="icon" />,
    className: currentTabSelected === 'add' ? 'is-active' : '',
  },
  {
    index: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline className="icon" />,
    className: currentTabSelected === 'edit' ? 'is-active' : '',
  },
];
