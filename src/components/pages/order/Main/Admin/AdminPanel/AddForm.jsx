import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import Button from '../../../../../reusable-ui/Button';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';

export const EMPTY_PRODUCT = {
  id: crypto.randomUUID(),
  title: '',
  imageSource: '',
  price: 0,
};

export default function AddForm() {
  //State
  //const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const newProductToAdd = {
    ...newProduct,
    id: crypto.randomUUID(),
  };

  //Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySubmittedMessage();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const displaySubmittedMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  //Affichage
  return (
    <AddFormStyled className="add-form" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <TextInput
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          placeholder={'Nom du produit (ex: Super Burger)'}
          version="minimalist"
        />
        <TextInput
          type="text"
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          version="minimalist"
        />
        <TextInput
          type="text"
          name="price"
          value={newProduct.price ? newProduct.price : ''}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          placeholder={'Prix'}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={'Ajouter un nouveau produit au menu'}
          onClick={handleSubmit}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  height: 100%;
  width: 70%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      width: 50%;
    }
  }
`;
