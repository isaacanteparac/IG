import styled, { css } from "styled-components";

export const Input = styled.input`
  ${(props) =>
    props.registerAccount &&
    css`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    outline-color: #7436FF;
    border: 2px solid #DCDEE5;
    font-size: 17px;
    color: #7436FF;

    &::placeholder{
        color: #DCDEE5;
    }
  `}

  ${(props) =>
    props.search &&
    css`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    font-size: 17px;
    color: #000;
    background-color: transparent;

    &::placeholder{
        color:#808eff;
    }
  `}

`;
