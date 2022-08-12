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

`;
