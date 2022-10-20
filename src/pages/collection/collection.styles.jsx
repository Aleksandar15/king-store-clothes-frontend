import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

export const CollectionTitle = styled.h2`
  margin: 0 auto 30px;
  font-size: 38px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
`;
