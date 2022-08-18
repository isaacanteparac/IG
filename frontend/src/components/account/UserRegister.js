import React, { useState, useEffect } from "react";



import {
  ContentCenter,
  ContentColumnCenter,
  Content,
  ContentLeft,
  ContentRight,
  ContentLeftColumn,
} from "../../styles/div";
import { Img, ContentImg } from "../../styles/image";
import { Label, H2, A } from "../../styles/letter";
import { Button } from "../../styles/button";

import imageHe from "../../img/human.png";
import imageShe from "../../img/she.png";
import iconGoogle from "../../img/google.svg";
import iconFacebook from "../../img/facebook.svg";
import SingUp from "./SingUp";
import Login from "./Login";






export default function UserRegister(props) {
  const [viewLogin, setViewLogin] = useState(props.login);
  const [viewSingUp, setViewSingUp] = useState(props.signup);
  const [url, setUrl] = useState(props.url);
  const [textChange, setTextChange] = useState({
    btnChange: "Sing Up",
    txtChange: "don't have an account?",
    subTitle: "",
    account: "log in with",
    imageHe: true,
    imageShe: false,
  });

  const btnChange = () => {
    if (!viewSingUp) {
      setViewLogin(false);
      setViewSingUp(true);
      setTextChange({
        btnChange: "Login",
        txtChange: "Already have an account?",
        subTitle: "Register you account",
        account: "Create account with",
        imageHe: false,
        imageShe: true,
      });
    } else {
      setViewSingUp(false);
      setViewLogin(true);
      setTextChange({
        btnChange: "Sing Up",
        txtChange: "Don't have an account?",
        subTitle: "",
        account: "Log in with",
        imageShe: false,
        imageHe: true,
      });
    }
  };

  useEffect(() => {
    btnChange();
  }, []);

  return (
    
    <ContentCenter login>
      <ContentImg login>
        {textChange.imageHe ? <Img login src={imageHe} /> : null}
        {textChange.imageShe ? <Img login src={imageShe} /> : null}
      </ContentImg>

      <ContentColumnCenter login>
        <ContentRight account>
          <Content>
            <Label trasnparent>{textChange.txtChange}</Label>
          </Content>
          <Content btnlogin>
            <A transparent href={url}>
              {" "}
              {textChange.btnChange}{" "}
            </A>
          </Content>
        </ContentRight>
        <ContentLeftColumn login>
          <H2 login>Welcome to ImageXD</H2>
          <Label subTitle color={({theme}) => theme.tertiary_font }>
            {textChange.subTitle}
          </Label>
        </ContentLeftColumn>
        {viewLogin ? <Login /> : null}

        {viewSingUp ? <SingUp /> : null}

        <ContentLeft login>
          <Content>
            <Label subTitle color={({theme}) => theme.tertiary_font }>
              {textChange.account}
            </Label>
          </Content>
          <Content btnCreateAccount>
            <Button
              trasnparent
              width="40px"
              height="40px"
              radius="20px"
              margin="0 10px"
            >
              <Img icon src={iconFacebook} />
            </Button>
            <Button
              trasnparent
              width="40px"
              height="40px"
              radius="20px"
              margin="0 10px"
            >
              <Img icon src={iconGoogle} />
            </Button>
          </Content>
        </ContentLeft>
      </ContentColumnCenter>
    </ContentCenter>
  );
}
