import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const OptionContainerStyles = css `
  padding: 10px 15px;
  font-size: 20px;
`

export const HeaderContainer = styled.div `
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: 20px;
    height: 65px;
  }
  `

  export const LogoContainer = styled(Link) `
  height: 100%;
  padding: 25px;
  width: 70px;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 50px;
  }
  `

  export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
  `


  export const OptionLink = styled(Link) `
    ${OptionContainerStyles}
  `

  export const OptionInLink = styled(Link) `
    ${OptionContainerStyles}
    text-decoration: greenyellow underline;
      padding: 10px 15px;
  `

  export const OptionOutDiv = styled.div `
    ${OptionContainerStyles}
    text-decoration: red underline;
    padding: 10px 15px;
    cursor: pointer;
  `