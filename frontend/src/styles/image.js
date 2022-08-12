import styled, { css } from "styled-components";

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.login &&
    css`
      width: 50%;
      height: auto;
      position: relative;
      top: 45px;
      overflow: hidden;
      /*background-image: radial-gradient(
        circle at 50% -20.71%,
        #ffffa1 0,
        #f5ffa0 6.25%,
        #e4ffa0 12.5%,
        #d2ffa1 18.75%,
        #bdffa3 25%,
        #a7fda6 31.25%,
        #8cfaaa 37.5%,
        #6cf7af 43.75%,
        #3cf2b5 50%,
        #00edbc 56.25%,
        #00e8c6 62.5%,
        #00e4d0 68.75%,
        #00dfdc 75%,
        #00dbe9 81.25%,
        #00d7f5 87.5%,
        #00d3ff 93.75%,
        #00d0ff 100%
      );*/
      background-image: radial-gradient(circle at 15.91% 9.37%, #ff00ff 0, #ff00ff 16.67%, #f600ff 33.33%, #bf00ff 50%, #8618ed 66.67%, #4721db 83.33%, #0025cb 100%);

      box-shadow: 4px 4px 4px 5px #c5c5c5;
      border-radius: 40px;
      padding: 5px;
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
`;
