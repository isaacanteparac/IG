import styled, { css } from "styled-components";
import { themeLight } from "./colors";

export const Label = styled.label`
  ${(props) =>
    props.title &&
    css`
      color: ${({ theme }) => theme.primary_font};
      font-size: 18px;
      margin-bottom: 2px;
      font-weight: 400;
      text-transform: capitalize;
      margin-right: 75%;
      text-align: left;
    `}

  ${(props) =>
    props.subTitle &&
    css`
      color: ${(props) => props.color || themeLight.subTitle};
      font-weight: 600;
      font-size: ${(props) => props.size || "20px"};
    `}

  ${(props) =>
    props.trasnparent &&
    css`
      color: ${({ theme }) => theme.tertiary_font};
    `}

  ${(props) =>
    props.blod &&
    css`
      color: ${({ theme }) => theme.primary_font};
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
      color: ${({ theme }) => theme.primary_font};
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
      color: ${({ theme }) => theme.primary_font};
      font-family: "Segoe UI";
      font-family: 19px;
      margin-left: 20px;
    `}

    ${(props) =>
    props.nicknamePost &&
    css`
      font-family: "Segoe UI";
      font-family: 19px;
      position: relative;
      top: 8px;
      font-weight: bold;
    `}
`;

export const H2 = styled.h1`
  margin: 0;
  padding: 0;
  ${(props) =>
    props.login &&
    css`
      color: ${({ theme }) => theme.register_title};
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
      border: 1px solid ${({ theme }) => theme.login_signup_font};

      padding: 5px 10px;
      &:active {
        color: ${({ theme }) => theme.login_signup_link};
        border: 2px solid ${({ theme }) => theme.register_btnBg};
      }
    `}
`;
