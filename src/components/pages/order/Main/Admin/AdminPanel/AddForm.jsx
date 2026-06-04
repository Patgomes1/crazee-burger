import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import { theme } from '../../../../../../theme';

const EMPTY_PRODUCT = {
  id: crypto.randomUUID(),
  title: '',
  imageSource: '',
  price: 0,
};

export default function AddForm() {
  //State
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const { handleAddProduct } = useContext(OrderContext);
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
        <input
          type="text"
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ''}
          onChange={handleChange}
        />
      </div>
      <div className="submit">
        <PrimaryButton
          className="submit-button"
          label={'Ajouter un nouveau produit au menu'}
          onClick={handleSubmit}
        />
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  //border: 1px dashed purple;
  height: 100%;
  width: 70%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    .no-image {
      width: 100%;
      height: 100%;
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.regular};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    background-color: lightblue;
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    flex-direction: row;
    align-items: center;
    .submit-button {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.success};
      width: 50%;

      &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
      }

      &:active:not(:disabled) {
        background-color: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
    .submit-message {
      color: green;
    }
  }
`;
