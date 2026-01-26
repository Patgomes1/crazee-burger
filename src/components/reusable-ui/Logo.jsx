import logo from '../../assets/logo-orange.png';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo({
  size = 'md', // sm | md | lg
  color = theme.colors.primary,
}) {
  return (
    <LogoStyled size={size} color={color}>
      <h1>CRAZEE</h1>
      <img src={logo} alt="Logo burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const sizes = {
  sm: {
    text: '24px',
    img: '40px',
    gap: '6px',
  },
  md: {
    text: '36px',
    img: '60px',
    gap: '8px',
  },
  lg: {
    text: '110px',
    img: '200px',
    gap: '12px',
  },
};

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ size }) => sizes[size].gap};

  h1 {
    font-size: ${({ size }) => sizes[size].text};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 1.5px;
    font-family: 'Amatic SC', cursive;
    color: ${({ color }) => color};
  }

  img {
    width: ${({ size }) => sizes[size].img};
    //height: auto;
  }
`;

/* export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1> <img src={logo} alt="Logo" /> <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  //border: 1px solid blue;
  display: flex;
  align-items: center;
  //transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: 'Amatic SC', cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
 */
