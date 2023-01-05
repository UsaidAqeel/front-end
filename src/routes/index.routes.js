import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Example from "../pages/home";

const RoutesCmp = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Example />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesCmp;
