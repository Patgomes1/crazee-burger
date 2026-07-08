import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

export const getInputTexts = (newProduct) => [
  {
    id: '1',
    name: 'title',
    value: newProduct.title,
    placeholder: 'Nom du produit (ex: Super Burger)',
    Icon: <FaHamburger />,
  },
  {
    id: '2',
    name: 'imageSource',
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    id: '3',
    name: 'price',
    value: newProduct.price ? newProduct.price : '',
    placeholder: 'Prix',
    Icon: <MdOutlineEuro />,
  },
];
