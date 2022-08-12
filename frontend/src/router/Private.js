import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext } from "../auth/Context";

export default function PrivateRouter({ children }){
  const { auth } = useContext(AuthContext);
  return auth.isLogin ? children : <Navigate to="/i/" />;
};