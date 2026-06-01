import styled from 'styled-components';

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
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
