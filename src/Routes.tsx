import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Signup, Login } from './components/Auth'

export default () => (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
);

