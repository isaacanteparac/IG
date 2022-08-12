import styled, { css } from "styled-components";

export const Label = styled.label`
  ${(props) =>
    props.login &&
    css`
    color: black;
    font-size: 18px;
    margin-bottom: 2px;
    font-weight: 400;
    text-transform: capitalize;
  `}
`;
