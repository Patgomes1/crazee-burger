import { useContext, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
  //State
  const [formData, setFormData] = useState({
    title: '',
    imageSource: '',
    price: 0,
  });
  const { handleAddProduct } = useContext(OrderContext);

  const newProduct = {
    id: Date.now(),
    title: 'Nouveau produit',
    imageSource:
      'https://burgeraddict.fr/wp-content/uploads/2024/09/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
    price: 9.99,
  };

  //Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProduct);
  };

  //Affichage
  return (
    <AddFormStyled className="add-form" onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.imageSource}
          onChange={(e) =>
            setFormData({ ...formData, imageSource: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Prix"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
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
