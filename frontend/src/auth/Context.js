import React, { createContext, useState, useCallback } from "react";
import { notoken, yesToken } from "./crudApi";

export const AuthContext = createContext();

export const Context = ({ children }) => {
  const initial = {
    isLogin: false,
    user: null,
  };

  const [auth, setAuth] = useState(initial);

  const login = async (email, password) => {
    const data = { email, password };
    const resp = await notoken("user/auth/verification", data);
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;
      setAuth({
        isLogin: true,
        user: user,
      });
      return resp.ok;
    }
    return resp.ok;
  };

  const sign_up = async (name, lastname, email, nickname, password) => {
    const data = { name, lastname, email, nickname, password };
    const resp = await notoken("user/auth/create", data);

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;
      setAuth({
        isLogin: true,
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        lastname: user.lastname,
      });
      return true;
    }
    return resp.ok;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      isLogin: false,
      id: null,
      email: null,
      nickname: null,
      name: null,
      lastname: null,
    });
  };

  const verificationToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        isLogin: false,
        id: null,
        email: null,
        nickname: null,
        name: null,
        lastname: null,
      });
      return false;
    }
    const resp = await yesToken("users/auth/token");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { user } = resp;
      setAuth({
        isLogin: true,
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        lastname: user.lastname,
      });
      return true;
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ auth, login, sign_up, logout, verificationToken }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
