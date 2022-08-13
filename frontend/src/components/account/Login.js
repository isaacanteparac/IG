import React, {useContext, useState } from "react";

import { ContentCenter, ContentLeftColumn, Form } from "../../styles/div";
import { Input } from "../../styles/inputs";
import { Label } from "../../styles/letter";
import { Button } from "../../styles/button";
import { AuthContext } from "../../auth/Context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const verifyingUser = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <Form login onSubmit={verifyingUser}>
      <ContentLeftColumn login>
        <Label registerAccount>email</Label>
        <Input
          registerAccount
          type="text"
          placeholder="holamundo@emial.com"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentLeftColumn login>
        <Label registerAccount>password</Label>
        <Input
          registerAccount
          type="password"
          placeholder="8+ characters"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentCenter btnRegsiter>
        <Button regsiter type="submit">Login</Button>
      </ContentCenter>
    </Form>
  );
}
