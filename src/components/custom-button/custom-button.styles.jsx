import styled, { css } from "styled-components";

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  color: white;
  background-color: #4285f4;
  border: none;

  &:hover {
    border: none;
    background-color: #357ae8;
  }
`;

const signInTestUserStyles = css`
  color: white;
  background-color: green;
  border: none;
  margin-bottom: 10px;
  display: block;
  padding: 0px 137px 0px 137px;

  &:hover {
    border: none;
    background-color: darkgreen;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.signInTestUser) {
    return signInTestUserStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  justify-content: center;
  display: flex;

  ${getButtonStyles}
`;
