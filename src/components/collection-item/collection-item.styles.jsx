import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  height: 350px;
  flex-direction: column;
  position: relative;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }
  
  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
  
      button {
        opacity: unset;
      }
    }
  }
`;


export const AddButton = styled(CustomButton)`
  width: 80%;
  top: 255px;
  display: none;
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 800px) {
    opacity: 0.9;
    display:block;
    min-width: unset;
    padding: 0 10px;
  }

`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;