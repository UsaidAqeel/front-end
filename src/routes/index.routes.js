import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/SignUp";
import Example from "../pages/home";
import Login from "../pages/login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./protected.routes";
import Man from "../pages/404";

const RoutesCmp = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Example />}></Route>
        </Route>
        <Route path="*" element={<Man />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesCmp;
