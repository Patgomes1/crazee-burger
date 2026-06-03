import styled from 'styled-components';

export default function EmptyMenuAdmin() {
  return <EmptyMenuAdminStyled>EmptyMenuAdmin</EmptyMenuAdminStyled>;
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  color: gray;
`;
