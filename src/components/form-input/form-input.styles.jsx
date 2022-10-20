import styled, { css } from 'styled-components';

const mainColor = 'black';
const subColor = 'grey';

const shrinkLabelStyles = css`
  top: -14px;
  color: ${mainColor};
  font-size: 12px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
  color: ${subColor};
  padding: 10px 10px 10px 5px;
  width: 100%;
  display: block;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  position: absolute;
  font-weight: normal;
  pointer-events: none;
  top: 10px;
  left: 5px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
