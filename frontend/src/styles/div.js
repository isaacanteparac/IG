import styled, { css } from "styled-components";

/*export const styleMain = {
  no_copy: {
    moz_user_select: none,
    webkit_user_drag: none,
    webkit_user_select: none,
    ms_user_select: none,
  },
};*/
export const ContentCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.login &&
    css`
      margin: auto;
      width: 100%;
      float: left;
      background-color: transparent;
    `}
`;

export const ContentColumnCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.login &&
    css`
      width: 50%;
    `}
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
`;

export const ContentLeftColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
`;

export const ContentLabeInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  ${(props) =>
    props.login &&
    css`
      width: 70%;
      padding: 5px;
      margin: auto;
      margin-bottom: 5px;
    `}
`;
