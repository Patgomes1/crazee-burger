import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

export const getTabsConfig = (currentTabSelected) => [
  {
    index: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus className="icon" />,
  },
  {
    index: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline className="icon" />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
