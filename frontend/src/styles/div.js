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
      height: 100%;
      float: left;
      background-color: ${({ theme }) => theme.register_bg};
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
    props.post &&
    css`
      width: 30%;
      height: 400px;

      //flex: 30%;
      // margin: 5px;
      //width: 30%;

      //align-self: flex-start;
      margin: 8px auto;
      padding: 0;
    `}

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

  ${(props) =>
    props.feed &&
    css`
      width: 100%;
    `}
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
      height: 40px;
      margin: 5px auto;
      padding-top: 10px;
      padding-left: 5px;
      width: 85%;
      border-radius: 10px;

      &:active {
        background-color: ${({ theme }) => theme.optionMenu_bg};
        border: 1px solid ${({ theme }) => theme.optionMenu_border};
        box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.optionMenu_shadow};
      }
    `}

    ${(props) =>
    props.search &&
    css`
      width: 30%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 3px;
      border: 2px solid ${({ theme }) => theme.search_border};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.search_bg};
    `}

    ${(props) =>
    props.infPost &&
    css`
      width: 50%;
      margin-top: 5px;
      float: left;
    `}

    ${(props) =>
    props.btnInteractionPost &&
    css`
      height: 100%;
      padding-top: 10px;
      margin: 0 10px;
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

  ${(props) =>
    props.interactionPost &&
    css`
      width: 50%;
      margin-top: 5px;
      float: left;
      height: 40px;
      overflow: hidden;
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
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
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
      height: auto;
    `}

  ${(props) =>
    props.menu &&
    css`
      background-color: ${({ theme }) => theme.menu_bg};
      width: 18.5%;
      height: 100%;
      float: left;
      position: fixed;
      padding: 10px;
      overflow-y: scroll;
    `}

  ${(props) =>
    props.main &&
    css`
      background-color: ${({ theme }) => theme.main_bg};
      width: 79%;
      min-height: 765px;
      padding: 10px 5px;
      border: 2px solid ${({ theme }) => theme.main_border};
      border-radius: 30px;
      float: left;
      position: relative;
      left: 20%;
      margin: 10px 0;
    `}

  ${(props) =>
    props.options &&
    css`
      margin-top: 20px;
      height: 47%;
      overflow-y: scroll;
    `}
  
  ${(props) =>
    props.head &&
    css`
      padding: 0 10px;
      padding-left: 50px;
      margin-top: 10px;
      margin-bottom: 15px;
    `}

    ${(props) =>
    props.history &&
    css`
      display: inline-flex;
      height: 80px;
      width: 100%;
      overflow-x: scroll;
      margin-bottom: 15px;
      margin-top: 10px;
    `}

    ${(props) =>
    props.infPost &&
    css`
      width: 100%;
    `}

    ${(props) =>
    props.posts &&
    css`
      width: 100%;
      height: 100%;

      //display: grid;
      //grid-template-columns: repeat(3,30%);
      //grid-gap: 5px;
      //padding: 5px;

      display: flex;
      flex-wrap: wrap;
      //align-items: center;
      /*grid-template-columns: repeat(3, 33%);
      grid-gap: 10px;
      grid-auto-flow: row dense;
      justify-content: flex-start;
      align-items: flex-start;
      grid-column-end: span 2;
  grid-row-end: span 2;*/
    `}
`;

export const Hr = styled.hr`
  ${(props) =>
    props.options &&
    css`
      width: 80%;
      color: ${({ theme }) => theme.line_color};
    `}
  ${(props) =>
    props.optionsV &&
    css`
      border: none;
      border-left: 1px solid hsla(200, 10%, 50%, 100);
      height: 30px;
      width: 1px;
      color: ${({ theme }) => theme.line_color};
    `}
`;
