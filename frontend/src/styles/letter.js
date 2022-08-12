import styled, { css } from "styled-components";

export const Label = styled.label`
  ${(props) =>
    props.registerAccount &&
    css`
      color: black;
      font-size: 18px;
      margin-bottom: 2px;
      font-weight: 400;
      text-transform: capitalize;
      margin-right: 75%;
      text-align: left;
    `}

  ${(props) =>
    props.subTitleLogin &&
    css`
      color: #aaaabb;
      font-weight: 600;
      font-size: 20px;
    `}

  ${(props) =>
    props.trasnparent &&
    css`
      color: #aaaabb;
    `}
`;

export const H2 = styled.h1`
  margin: 0;
  padding: 0;
  ${(props) =>
    props.login &&
    css`
      color: #c600ff;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    `}
`;

export const A  = styled.a`
text-decoration: none
`;
