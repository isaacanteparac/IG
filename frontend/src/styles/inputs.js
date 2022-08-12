import styled, { css } from "styled-components";

export const Input = styled.input`
  ${(props) =>
    props.login &&
    css`
    width: 80%;
    height: 35px;
    border-radius: 8px;
    outline-color: #7436FF;
    border: 2px solid #DCDEE5;
    font-size: 17px;
    color: #7436FF

    &:hover{
        background-color: #105b72c2;

    }

    
  `}
`;
