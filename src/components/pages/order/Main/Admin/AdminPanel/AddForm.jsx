import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import Button from '../../../../../reusable-ui/Button';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';

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
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img
            className="image"
            src={newProduct.imageSource}
            alt={newProduct.title}
          />
        ) : (
          <div className="no-image">Aucune image</div>
        )}
      </div>
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
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succès !</span>
          </div>
        )}
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

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .no-image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.regular};
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

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

    .submit-message {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }

      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
      }
    }
  }
`;
