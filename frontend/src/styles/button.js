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
      background-color: ${({theme})=> theme.register_btnBg};
      color: ${({theme}) => theme.secundary_font};
      box-shadow: 4px 4px 4px ${({theme}) => theme.primary_shadow};

      &:active {
        background-color: ${({theme})=> theme.register_btnBgHv};
      }
    `}
  
    ${(props) =>
    props.trasnparent &&
    css`
      width: ${(props) => props.width || "auto"};
      height: ${(props) => props.height || "auto"};
      border-radius:  ${(props) => props.radius || "0px"};
      background-color: transparent;
      text-align: center;
      border: 1px solid ${({theme}) => theme.secundary_border};
      margin:${(props) => props.margin || "0px"};
      padding: ${(props) => props.padding || "0px"};
      &:active {
        box-shadow: 1px 1px 1px 1px ${({theme}) => theme.secundary_shadow};
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
      color: ${({theme}) => theme.secundary_font};
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
