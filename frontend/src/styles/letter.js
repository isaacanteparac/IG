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

  ${(props) =>
    props.blod &&
    css`
      color: #000;
      font-weight: 600;
    `}

  ${(props) =>
    props.trasnparentNicknameBig &&
    css`
      color: #aaaabb;
      font-size: 17px;
      margin: 5px 0;
    `}
  
    ${(props) =>
    props.trasnparentNameBig &&
    css`
      color: #000;
      font-size: 20px;
      font-weight: bolder;
    `}

  ${(props) =>
    props.nameApp &&
    css`
      font-weight: 600;
      font-size: 23px;
      text-transform: capitalize;
    `}
  
  ${(props) =>
    props.options &&
    css`
      font-family: 'Segoe UI';
      font-family: 18px;
      margin-left: 20px;
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

export const A = styled.a`
  text-decoration: none;
  border: none;
  background-color: transparent;
  text-align: center;
  margin: 0;
  padding: 0;
  ${(props) =>
    props.transparent &&
    css`
      color: #999;
      font-weight: bold;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      width: auto;
      height: 30px;
      border-radius: 20px;
      background-color: transparent;
      text-align: center;
      border: 1px solid #c5c5c5;

      padding: 5px 10px;
      &:active {
        color: #905eff;
        border: 2px solid #905eff;
      }
    `}
`;
