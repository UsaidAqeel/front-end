import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const RoutesCmp = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesCmp;
