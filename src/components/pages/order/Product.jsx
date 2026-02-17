import styled from 'styled-components';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { formatPrice } from '../../../utils/maths';

//State

//Comportement

// Affichage
export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <img src={imageSource} alt={title} />
      <div className="info">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="description">
          <p>{formatPrice(price)}</p>
          <PrimaryButton className="add-to-cart" label={'Ajouter'} />
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 330px;
  width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 145px;
    margin: 50px 20px 15px 20px;
    padding: 16px 8px 16px 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 200px;
    height: 110px;
    margin: 0;
    line-height: 1;

    .title {
      width: 190px;
      height: 46px;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
      color: black;
      font-family: 'Amatic SC', cursive;
    }

    .description {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      color: orange;

      .add-to-cart {
        background: orange;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        width: 95px;
        height: 38px;

        &:hover {
          background-color: white;
          color: orange;
        }
      }
    }
  }
`;
