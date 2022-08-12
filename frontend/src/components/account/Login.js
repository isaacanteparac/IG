import React, { useState } from "react";

import {
    ContentCenter,
    ContentLeftColumn,
    Form,
  } from "../../styles/div";
  import { Input } from "../../styles/inputs";
  import { Label } from "../../styles/letter";
  import { Button } from "../../styles/button";

export default function Login() {
  return (
    <Form login>
      <ContentLeftColumn login>
        <Label registerAccount>email</Label>
        <Input registerAccount type="text" placeholder="holamundo@emial.com" />
      </ContentLeftColumn>
      <ContentLeftColumn login>
        <Label registerAccount>password</Label>
        <Input registerAccount type="password" placeholder="8+ characters" />
      </ContentLeftColumn>
      <ContentCenter btnRegsiter>
        <Button regsiter>Login</Button>
      </ContentCenter>
    </Form>
  );
}
