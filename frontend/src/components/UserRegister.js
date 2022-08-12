import React from "react";
import { ContentCenter, ContentColumn, ContentLabeInput } from "../styles/div";
import { Img, ContentImg } from "../styles/image";
import { Input } from "../styles/inputs";
import { Label } from "../styles/letter";

import imageLogin from "../img/i2_0003.png";

export default function UserRegister() {
  return (
    <ContentCenter login>
      <ContentImg login>
        <Img login src={imageLogin} />
      </ContentImg>
      <ContentColumn login>

        <ContentLabeInput login>
          <Label login>Name</Label>
          <Input login type="text" placeholder="Isaac"/>
        </ContentLabeInput>
        <ContentLabeInput login>
          <Label login>Last Name</Label>
          <Input login type="text" placeholder="Antepara"/>
        </ContentLabeInput>
        <ContentLabeInput login>
          <Label login>Email</Label>
          <Input login type="text" placeholder="holamundo@emial.com"/>
        </ContentLabeInput>
        <ContentLabeInput login>
          <Label login>nickName</Label>
          <Input login type="text" placeholder="holaMundo"/>
        </ContentLabeInput>
        <ContentLabeInput login>
          <Label login>password</Label>
          <Input login type="password" placeholder="8+ characters"/>
        </ContentLabeInput>
      </ContentColumn>
    </ContentCenter>
  );
}
