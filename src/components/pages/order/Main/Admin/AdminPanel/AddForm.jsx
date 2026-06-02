import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
  //State
  const [newProduct, setNewProduct] = useState({
    id: new Date().getTime(),
    title: '',
    imageSource:
      'https://burgeraddict.fr/wp-content/uploads/2024/09/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
    price: 0,
  });
  const { handleAddProduct } = useContext(OrderContext);

  //Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProduct);
  };

  //Affichage
  return (
    <AddFormStyled className="add-form" onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.imageSource}
          onChange={(e) =>
            setNewProduct({ ...newProduct, imageSource: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ''}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
      </div>
      <button className="submit-button">Ajouter</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid purple;
  height: 100%;
  width: 70%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .image-preview {
    background-color: lightgray;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background-color: lightblue;
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
  }

  .submit-button {
    background-color: lightgreen;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`;
