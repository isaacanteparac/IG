import React, { useContext, useState } from "react";

import { ContentCenter, ContentLeftColumn, Form } from "../../styles/div";
import { Input } from "../../styles/inputs";
import { Label } from "../../styles/letter";
import { Button } from "../../styles/button";

import { AuthContext } from "../../auth/Context";

export default function SingUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const { sign_up } = useContext(AuthContext);

  const createUser = async () => {
    await sign_up(name, lastname, email, nickname, password);
  };


  return (
    <Form login onSubmit={createUser}>
      <ContentLeftColumn login>
        <Label registerAccount>Name</Label>
        <Input
          registerAccount
          type="text"
          placeholder="Real name"
          name="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentLeftColumn login>
        <Label registerAccount>last Name</Label>
        <Input
          registerAccount
          type="text"
          placeholder="Real surname"
          name="lastname"
          required
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentLeftColumn login>
        <Label registerAccount>email</Label>
        <Input
          registerAccount
          type="text"
          placeholder="holamundo@emial.com"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentLeftColumn login>
        <Label registerAccount>nickName</Label>
        <Input
          registerAccount
          type="text"
          placeholder="holaMundo"
          name="nickname"
          required
          onChange={(e) => {
            setNickname(e.target.value);
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
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </ContentLeftColumn>
      <ContentCenter btnRegsiter>
        <Button regsiter type="submit">
          Register
        </Button>
      </ContentCenter>
    </Form>
  );
}
