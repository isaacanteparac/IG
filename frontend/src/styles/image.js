import styled, { css } from "styled-components";

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  ${(props) =>
    props.login &&
    css`
      width: 50%;
      height: auto;
      position: relative;
      top: 45px;
      overflow: hidden;
      background-image: radial-gradient(
        circle at 15.91% 9.37%,
        #ff00ff 0,
        #ff00ff 16.67%,
        #f600ff 33.33%,
        #bf00ff 50%,
        #8618ed 66.67%,
        #4721db 83.33%,
        #0025cb 100%
      );

      box-shadow: 4px 4px 4px 5px #c5c5c5;
      border-radius: 40px;
      padding: 5px;
    `}

    ${(props) =>
    props.photoProfile &&
    css`
      margin: auto;
      width: 95%;
      padding: 5px;
    `}

    ${(props) =>
    props.history &&
    css`
      margin: auto;
      width: 65px;
      height: 65px;
      padding: 5px;
      margin: 0 3px;
    `}

    ${(props) =>
    props.post &&
    css`
      width: 100%;
      overflow: hidden;
    `}

    ${(props) =>
    props.photoUser &&
    css`
      margin: 0 5px;
      width: 40px;
      overflow: hidden;
    `}
`;

export const Img = styled.img`
  height: auto;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  ${(props) =>
    props.login &&
    css`
      height: 700px;
      border-radius: 15px;
    `}

  ${(props) =>
    props.icon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  
    ${(props) =>
    props.photoProfile &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      width: 120px;
      border-radius: 60px;

    `}

    ${(props) =>
    props.history &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      padding: 1px;
      border: 3px solid #0057E7;
    `}

    ${(props) =>
    props.post &&
    css`
      margin: auto;
      width: 100%;
      border-radius: 30px;

    `}

    ${(props) =>
    props.photoUser &&
    css`
      margin: auto;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    `}
`;
