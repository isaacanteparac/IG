import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";

import UserRegister from "../components/account/UserRegister";


export default function NoAuth() {
  return (
    <>
        <Routes>
          <Route path="signup" element={<UserRegister login={true} signup={false} url="http://localhost:3000/i/login"/>} />
          <Route path="login" element={<UserRegister signup={true} login={false} url="http://localhost:3000/i/signup"/>} />
          <Route path="*" element={<Navigate to="/i/login" />} />
        </Routes>
    </>
  );
}