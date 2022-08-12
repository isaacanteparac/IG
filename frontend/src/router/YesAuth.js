import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../components/home/Navigation";

export default function YesAuthRouter() {
  return (

       <Routes>
        <Route path="/" element={<Navigation/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

     
  );
}