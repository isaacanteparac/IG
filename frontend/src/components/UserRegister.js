import React from "react";
import {
  ContentCenter,
  ContentLeftColumn,
  ContentColumnCenter,
  Form,
  Content,
  ContentLeft,ContentRight
} from "../styles/div";
import { Img, ContentImg } from "../styles/image";
import { Input } from "../styles/inputs";
import { Label, H2 } from "../styles/letter";
import { Button } from "../styles/button";

import imageLogin from "../img/human.png";
import iconGoogle from "../img/google.svg";
import iconFacebook from "../img/facebook.svg";

export default function UserRegister() {
  return (
    <ContentCenter login>
      <ContentImg login>
        <Img login src={imageLogin} />
      </ContentImg>

      <ContentColumnCenter login>
        <ContentRight account>
          <Content>
            <Label trasnparent>Already have an account?</Label>
          </Content>
          <Content Login>
            <Button trasnparent width="60px">
              Login
            </Button>
          </Content>
        </ContentRight>
        
        <Form login>
          <ContentLeftColumn titleLogin>
            <H2 login>Welcome to I</H2>
            <Label subTitleLogin>Register you account</Label>
          </ContentLeftColumn>
          <ContentLeftColumn login>
            <Label registerAccount>Name</Label>
            <Input registerAccount type="text" placeholder="Isaac" />
          </ContentLeftColumn>
          <ContentLeftColumn login>
            <Label registerAccount>last Name</Label>
            <Input registerAccount type="text" placeholder="Antepara" />
          </ContentLeftColumn>
          <ContentLeftColumn login>
            <Label registerAccount>email</Label>
            <Input registerAccount type="text" placeholder="holamundo@emial.com" />
          </ContentLeftColumn>
          <ContentLeftColumn login>
            <Label registerAccount>nickName</Label>
            <Input registerAccount type="text" placeholder="holaMundo" />
          </ContentLeftColumn>
          <ContentLeftColumn login>
            <Label registerAccount>password</Label>
            <Input registerAccount type="password" placeholder="8+ characters" />
          </ContentLeftColumn>
          <ContentCenter btnRegsiter>
            <Button regsiter>Register</Button>
          </ContentCenter>
        </Form>

        <ContentLeft login>
          <Content>
            <Label subTitleLogin>Create account with</Label>
          </Content>
          <Content iconLogin>
            <Button trasnparent>
              <Img icon src={iconFacebook} />
            </Button>
            <Button trasnparent>
              <Img icon src={iconGoogle} />
            </Button>
          </Content>
        </ContentLeft>

      </ContentColumnCenter>
    </ContentCenter>
  );
}
