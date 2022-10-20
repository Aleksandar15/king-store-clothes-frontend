import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  flex-direction: column;
  margin-bottom: 60px;
  display: flex;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  cursor: pointer;
  font-size: 33px;
  margin-bottom: 25px;
  text-decoration: underline deepskyblue;
  padding-bottom: 15px;
  text-align: center;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
`;
