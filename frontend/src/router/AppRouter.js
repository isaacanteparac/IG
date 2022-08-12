import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NoAuth from "./NoAuth";
//import YesAuth from "./YesAuth";
import Public from "./Public";
import Private from "./Private";

import Navigation from "../components/home/Navigation";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <Public>
                <NoAuth />
              </Public>
            }
          />

          <Route
            path="/i/*"
            element={
              <Private>
                <Navigation/>
              </Private>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}