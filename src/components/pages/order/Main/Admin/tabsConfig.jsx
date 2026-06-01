import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import AddPanel from './AdminPanel/AddPanel';
import EditPanel from './AdminPanel/EditPanel';

export const getTabsConfig = (currentTabSelected) => [
  {
    index: 'add',
    label: 'Ajouter un produit',
    Icon: <AiOutlinePlus className="icon" />,
    Content: <AddPanel />,
  },
  {
    index: 'edit',
    label: 'Modifier un produit',
    Icon: <MdModeEditOutline className="icon" />,
    Content: <EditPanel />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
