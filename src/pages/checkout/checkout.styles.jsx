import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: 50px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;

  }
    @media screen and (max-width: 800px) {
      width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  
  @media screen and (max-width: 800px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
font-size: 36px;
  margin-top: 30px;
  margin-left: auto;
`;

export const WarningContainer = styled.div`
font-size: 24px;
  text-align: center;
  margin-top: 40px;
  color: red;
`;
