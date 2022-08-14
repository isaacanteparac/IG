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
      background-color: #fff;
    `}

  ${(props) =>
    props.btnRegsiter &&
    css`
      width: 64%;
      position: relative;
      right: 20px;
      margin-top: 10px;
    `}

  ${(props) =>
    props.noCopy &&
    css`
     -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `}
  ${(props) =>
    props.inf_follower &&
    css`
      margin-top: 20px;

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
  ${(props) =>
    props.noCopy &&
    css`
     -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `}
  ${(props) =>
    props.inf_follower &&
    css`
      width: 30%;
      margin: 10px 3px;
      padding: 3px;
      border-radius: 10px;
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

    ${(props) =>
    props.noCopy &&
    css`
     -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `}

  ${(props) =>
    props.options &&
    css`

      height: 30px;
      margin: 5px auto;
      padding-top: 10px;
      padding-left: 5px;
      width: 85%;
      border-radius: 10px;

     

      &:active {
        box-shadow: 3px 3px 3px 4px #c5c5c5;
      }
    `}
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: right;

  ${(props) =>
    props.account &&
    css`
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
    props.noCopy &&
    css`
     -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `}

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
  
  ${(props) =>
    props.home &&
    css`
      margin: auto;
      width: 100%;
      background-color: red;
      
    `}

  ${(props) =>
    props.menu &&
    css`
      background-color: #f9f9f9;
      width: 18%;
      height: 100%;
      float: left;
      position: fixed;
      padding: 10px;
    `}

  ${(props) =>
    props.main &&
    css`
      background-color: #fff;
      width: 79%;
      height: 765px;
      padding: 10px 5px;
      border: 1px solid #e0e0e0;
      border-radius: 30px;
      float: left;
      position: relative;
      left: 20%;
      margin-top: 2px;
    `}
`;
