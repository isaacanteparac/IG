import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) =>
    props.regsiter &&
    css`
      width: 70%;
      height: 50px;

      border-radius: 20px;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      border: none;
      font-size: 20px;
      background-color: #7436ff;
      color: #fff;
      box-shadow: 4px 4px 4px #aaaabb;

      &:active {
        background-color: #905eff;
      }
    `}

  ${(props) => props.login}

  ${(props) =>
    props.trasnparent &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: transparent;
      text-align: center;
      border: 1px solid #c5c5c5;

      margin: 0 10px;
      &:active {
        box-shadow: 1px 1px 1px 1px #c5c5c5;
      }
    `}

`;
