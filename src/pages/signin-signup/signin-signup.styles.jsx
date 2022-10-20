import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 900px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;


  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: unset;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
