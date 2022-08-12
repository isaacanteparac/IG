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

  ${(props) =>
    props.btnRegsiter &&
    css`
      width: 65%;
      margin-top: 10px;
    `}
`;

export const ContentColumnCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.login &&
    css`
      width: 45%;
      margin-left: 10px;
      padding-top: 25px;
    `}
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;

  ${(props) =>
    props.login &&
    css`
      width: 75%;
      position: relative;
      top: 40px;
      height: 30px;
    `}
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: right;

  ${(props) => props.account && css`
  width: 75%;
  height: 40px;
  `}
`;

export const ContentLeftColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;

  ${(props) =>
    props.login &&
    css`
      width: 70%;
      margin: 10px 0;
    `}
  ${(props) =>
    props.titleLogin &&
    css`
      margin-bottom: 10px;
      width: 75%;
    `}
`;

export const Form = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.login &&
    css`
      width: 100%;
      margin-left: 10px;
    `}
`;

export const Content = styled.div`
  margin: 0;
  padding: 0;

  ${(props) =>
    props.btnCreateAccount &&
    css`
      position: relative;
      bottom: 5px;
      left: 5px;
    `}

  ${(props) =>
    props.btnlogin &&
    css`
      position: relative;
      left: 10px;
    `}
`;
