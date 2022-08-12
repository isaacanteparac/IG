import styled, { css } from "styled-components";

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.login &&
    css`
    width: 50%;
  `}
`;

export const Img = styled.img`
  height: auto;
  ${(props) =>
    props.login &&
    css`
      margin: 70px;
      width: 65%;
      height: auto;
      border-radius: 15px;
    `}
`;
