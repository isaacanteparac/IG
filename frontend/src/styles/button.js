import styled, { css } from "styled-components";

export const Button = styled.button`
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.regsiter &&
    css`
      width: 90%;
      height: 50px;
      border-radius: 20px;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      border: none;
      font-size: 20px;
      background-color: #9213f1;
      color: #fff;
      box-shadow: 4px 4px 4px #aaaabb;

      &:active {
        background-color: #b206fb;
      }
    `}

  ${(props) => props.login}

  ${(props) =>
    props.icontrasnparent &&
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

  
    ${(props) =>
    props.trasnparent &&
    css`
      width: auto;
      height: 30px;
      border-radius: 20px;
      background-color: transparent;
      text-align: center;
      border: 1px solid #c5c5c5;

      padding: 5px 10px;
      &:active {
        border: 2px solid #905eff;
      }
    `}

      
    ${(props) =>
    props.addPhoto &&
    css`
      width: auto;
      height: 40px;
      border-radius: 10px;
      text-align: center;
      border: none;
      float: right;
      position: relative;
      bottom: 40px;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      padding: 5px 10px;
      background-image: radial-gradient(
        circle at 120.71% 50%,
        #f1d8ff 0,
        #c1b2ff 25%,
        #808dff 50%,
        #006df2 75%,
        #0054e5 100%
      );
      &:active {
        background-image: radial-gradient(
          circle at -20.44% 43.84%,
          #f1d8ff 0,
          #c1b2ff 25%,
          #808dff 50%,
          #006df2 75%,
          #0054e5 100%
        );
      }
    `}
`;
